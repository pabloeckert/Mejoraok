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

export const WHATSAPP_PHONE = "5493764358152";
export const WHATSAPP_DEFAULT_TEXT = "Hola Pablo, estuve viendo la propuesta en mejoraok.com y quiero revisar mi estructura operativa";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`;

function getApiConfig() {
  const url =
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_CONTACTOS_API_URL) ||
    (typeof process !== "undefined" && process.env?.VITE_CONTACTOS_API_URL) ||
    DEFAULT_API_URL;

  const key =
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_CONTACTOS_API_KEY) ||
    (typeof process !== "undefined" && process.env?.VITE_CONTACTOS_API_KEY) ||
    DEFAULT_API_KEY;

  return { url, key };
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

    return {
      ok: true,
      persona_id: data.persona_id,
      creado: data.creado,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.warn("[Mejoraok Contactos] Excepción en envío asíncrono (fail-soft):", message);
    return {
      ok: false,
      error: message,
    };
  }
}
