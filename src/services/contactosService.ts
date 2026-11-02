/**
 * Servicio de integración comercial para Mejoraok -> contactos-api (Gateway Central)
 * Envío asíncrono y fail-soft de leads capturados en la landing.
 */

export interface LeadPayload {
  email?: string;
  nombre?: string;
  telefono?: string;
  cta_tipo?: string;
}

export interface SyncLeadResult {
  ok: boolean;
  persona_id?: string;
  creado?: boolean;
  error?: string;
}

const DEFAULT_API_URL = "https://tzatuvxatsduuslxqdtm.supabase.co/functions/v1/contactos-api";
const DEFAULT_API_KEY = "aec74a771a7ec402234501ac9ba1d0bb8490a7dc9e6a53a8aeed8e5f6855274a";
const DEFAULT_NUCLEO_URL = "http://127.0.0.1:4002/api/prospectos";

export const WHATSAPP_PHONE = "5493764358152";
export const WHATSAPP_DEFAULT_TEXT = "Hola, estuve viendo la propuesta en mejoraok.com y quiero ver si me pueden dar una mano, ¿puede ser?";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`;

function getApiConfig(): { url: string; key: string } {
  const metaEnv = (import.meta as any)?.env;
  const procEnv = typeof process !== "undefined" ? process.env : undefined;
  const url = metaEnv?.VITE_CONTACTOS_API_URL || procEnv?.VITE_CONTACTOS_API_URL || DEFAULT_API_URL;
  const key = metaEnv?.VITE_CONTACTOS_API_KEY || procEnv?.VITE_CONTACTOS_API_KEY || DEFAULT_API_KEY;

  return { url: String(url), key: String(key) };
}

/**
 * Registra evento de conversión de forma liviana en localStorage / console
 */
export function trackConversionEvent(tipo: "whatsapp" | "diagnostico" | "formulario", metadata?: Record<string, unknown>) {
  try {
    const timestamp = new Date().toISOString();
    const eventKey = `mejoraok_event_${tipo}_count`;
    const currentCount = parseInt(localStorage.getItem(eventKey) || "0", 10) + 1;
    localStorage.setItem(eventKey, currentCount.toString());
    localStorage.setItem(`mejoraok_last_${tipo}_at`, timestamp);

    console.info(`[Mejoraok Telemetría] Evento '${tipo}' (#${currentCount}) registrado:`, {
      tipo,
      timestamp,
      count: currentCount,
      ...metadata,
    });
  } catch (err) {
    console.debug("[Mejoraok Telemetría] Fallback logging:", err);
  }
}

/**
 * Envía asíncronamente el lead a contactos-api.
 * Garantiza fail-soft: no lanza excepciones si la red falla o está offline.
 */
export async function syncLeadToContactos(payload: LeadPayload): Promise<SyncLeadResult> {
  const { url, key } = getApiConfig();

  const body = {
    source: "mejoraok",
    email: payload.email?.trim() || null,
    nombre: payload.nombre?.trim() || null,
    telefono: payload.telefono?.trim() || null,
    metadata: {
      origen_cta: payload.cta_tipo || "cta_principal",
    },
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": key,
        Accept: "application/json",
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      const errorText = await res.text().catch(() => "");
      console.warn(`[Mejoraok Contactos] Error ${res.status}:`, errorText);
      return {
        ok: false,
        error: `HTTP ${res.status}: ${errorText.slice(0, 150)}`,
      };
    }

    const data = await res.json();
    console.info("[Mejoraok Contactos] Lead sincronizado exitosamente:", data);

    trackConversionEvent("formulario", {
      persona_id: data.persona_id,
      origen_cta: payload.cta_tipo,
    });

    // Enchufe universal a MejoraNucleo (fail-soft, Fast-Window)
    syncLeadToNucleo(payload).catch((e) =>
      console.warn("[Mejoraok -> MejoraNucleo] Fallback silencioso:", e)
    );

    return {
      ok: true,
      persona_id: data.persona_id,
      creado: data.creado,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.warn("[Mejoraok Contactos] Excepción en envío asíncrono (fail-soft):", message);

    // Fallback directo a MejoraNucleo si contactos-api falla o está caído
    syncLeadToNucleo(payload).catch((e) =>
      console.warn("[Mejoraok -> MejoraNucleo Fallback]:", e)
    );

    return {
      ok: false,
      error: message,
    };
  }
}

/**
 * Enchufe canónico directo a MejoraNucleo (Fast-Window timeout con AbortController)
 */
export async function syncLeadToNucleo(payload: LeadPayload): Promise<{ ok: boolean; id?: string }> {
  try {
    const metaEnv = (import.meta as any)?.env;
    const procEnv = typeof process !== "undefined" ? process.env : undefined;
    const nucleoUrl = metaEnv?.VITE_NUCLEO_API_URL || procEnv?.VITE_NUCLEO_API_URL || DEFAULT_NUCLEO_URL;

    const urlParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
    const utmSource = urlParams?.get("utm_source") || "mejoraok_landing";
    const utmMedium = urlParams?.get("utm_medium") || undefined;
    const utmCampaign = urlParams?.get("utm_campaign") || undefined;
    const utmContent = urlParams?.get("utm_content") || undefined;
    const piezaIdAtribucion = urlParams?.get("pieza_id") || undefined;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const body = {
      nombre: payload.nombre?.trim() || "Contacto Web Mejoraok",
      email: payload.email?.trim() || "sin-email@mejoraok.com",
      telefono: payload.telefono?.trim() || undefined,
      canalOrigen: "mejoraok_landing",
      mensaje: `CTA: ${payload.cta_tipo || "cta_principal"}`,
      utmSource,
      utmMedium,
      utmCampaign,
      utmContent,
      piezaIdAtribucion,
    };

    const res = await fetch(nucleoUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn("[Mejoraok -> MejoraNucleo] Servidor respondió con estado:", res.status);
      return { ok: false };
    }

    const data = await res.json();
    return { ok: true, id: data.id };
  } catch (err) {
    console.debug("[Mejoraok -> MejoraNucleo] Fail-soft offline:", err);
    return { ok: false };
  }
}
