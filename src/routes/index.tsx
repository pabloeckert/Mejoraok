import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Instagram, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  component: ComingSoonPage,
  head: () => ({
    meta: [
      { title: "Mejora Continua — Comunidad de Negocios | Posadas, Misiones" },
      {
        name: "description",
        content:
          "Mejora Continua acompaña a líderes, equipos y organizaciones a transformar ideas en acciones con impacto. Hablemos por WhatsApp.",
      },
      { property: "og:title", content: "Mejora Continua — Comunidad de Negocios" },
      {
        property: "og:description",
        content:
          "Acompañamos a líderes, equipos y organizaciones. Hablemos por WhatsApp, sin costo ni compromiso.",
      },
      { property: "og:image", content: "/ImagenDestacada.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/ImagenDestacada.png" },
      { name: "twitter:title", content: "Mejora Continua — Comunidad de Negocios" },
    ],
  }),
});

const NAVY = "#020659";
const NAVY_SOFT = "#1C4D8C";
const GOLD = "#F2BB16";
const GOLD_DARK = "#D9A40A";
const CREAM = "#F5F3EE";
const WHATSAPP = "https://wa.me/5493764358152?text=Hola%20Sindy%2C%20quiero%20conversar%20sobre%20Mejora%20Continua.";

/* ── WhatsApp glyph (official-style) ── */
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}

function GoldCTA({
  label = "Hablemos por WhatsApp",
  size = "md",
  block = false,
}: {
  label?: string;
  size?: "md" | "lg";
  block?: boolean;
}) {
  const pad = size === "lg" ? "px-7 py-4 text-[15px]" : "px-6 py-3.5 text-[14px]";
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-lg font-bold transition-all duration-200 active:scale-[0.98] hover:-translate-y-[1px] ${pad} ${
        block ? "w-full" : "self-start"
      }`}
      style={{
        background: GOLD,
        color: "#0D0D0D",
        fontFamily: "'LeagueSpartan', sans-serif",
        boxShadow: "0 12px 28px -10px rgba(242,187,22,0.6)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = GOLD_DARK)}
      onMouseLeave={(e) => (e.currentTarget.style.background = GOLD)}
    >
      <WhatsAppIcon className="w-[18px] h-[18px]" />
      {label}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

function ComingSoonPage() {
  return (
    <main
      className="min-h-[100dvh] w-full flex items-center justify-center px-0 sm:px-6 lg:px-10 py-0 sm:py-10 lg:py-14"
      style={{ fontFamily: "'BwModelica', 'Plus Jakarta Sans', sans-serif", background: CREAM }}
    >
      <article
        className="w-full max-w-[1080px] grid grid-cols-1 md:grid-cols-[minmax(0,46%)_1fr] bg-white sm:rounded-2xl overflow-hidden"
        style={{ boxShadow: "0 30px 80px -24px rgba(2,6,89,0.22)" }}
      >
        {/* ── Image side ── */}
        <div className="relative bg-[#eef0f4] h-[300px] sm:h-[380px] md:h-auto md:min-h-[720px]">
          <img
            src="/ImagenDestacada.png"
            alt="Mejora Continua — líder enfocado en resultados"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "22% center" }}
          />
          {/* Gradient at bottom on mobile for the floating chip */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 md:hidden"
            style={{ background: "linear-gradient(180deg, rgba(2,6,89,0) 0%, rgba(2,6,89,0.55) 100%)" }}
          />
          {/* Mobile floating quote */}
          <div className="md:hidden absolute bottom-4 left-4 right-4">
            <p
              className="text-white text-[13px] leading-snug font-medium"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.35)" }}
            >
              Vos liderás. Nosotros te acompañamos a transformar ideas en resultados.
            </p>
          </div>
        </div>

        {/* ── Content side ── */}
        <div className="px-6 sm:px-10 lg:px-14 py-9 sm:py-12 lg:py-14 flex flex-col justify-center">
          {/* Logo */}
          <div className="mb-7 sm:mb-9">
            <img src="/MC1A.png" alt="Mejora Continua" className="h-11 sm:h-12 w-auto" />
            <p
              className="mt-2.5 text-[10px] tracking-[0.25em] uppercase"
              style={{ color: "#9aa0ad" }}
            >
              Comunidad de Negocios · Posadas, Misiones
            </p>
          </div>

          {/* Badge */}
          <span
            className="self-start inline-block px-3.5 py-1 rounded-full text-[10px] tracking-[0.18em] uppercase mb-5"
            style={{
              background: "#F2F2F2",
              border: "1px solid #E1E1E6",
              color: "#7a7e8a",
              fontWeight: 500,
            }}
          >
            Nuevo sitio en camino
          </span>

          {/* Headline */}
          <h1
            className="text-[32px] sm:text-[42px] lg:text-[52px] font-bold tracking-tight leading-[1.02]"
            style={{ fontFamily: "'LeagueSpartan', sans-serif", color: NAVY }}
          >
            VOS QUERÉS
            <br />
            RESULTADOS.
          </h1>

          {/* Tagline */}
          <p
            className="mt-4 sm:mt-5 text-[15px] sm:text-base leading-relaxed max-w-md"
            style={{ color: "#525560", fontFamily: "'LeagueSpartan', sans-serif", fontWeight: 400 }}
          >
            Mejora Continua te acompaña a vos como líder, a tus equipos y a tu organización.
          </p>

          <p className="mt-3.5 text-[13.5px] sm:text-sm leading-[1.7] max-w-md" style={{ color: "#6b6e78" }}>
            Las ideas, los procesos y los sueños solo valen si se transforman en acciones con
            impacto. Estamos construyendo algo nuevo para vos. Mientras tanto, escribinos.
          </p>

          {/* Trust bullets */}
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 max-w-md">
            {["Respuesta en el día", "Conversación sin costo", "Sin compromiso"].map((b) => (
              <li key={b} className="flex items-center gap-2 text-[12.5px]" style={{ color: "#525560" }}>
                <span
                  className="grid place-items-center w-4 h-4 rounded-full shrink-0"
                  style={{ background: GOLD }}
                >
                  <Check className="w-2.5 h-2.5" strokeWidth={3.5} color="#0D0D0D" />
                </span>
                {b}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="my-6 sm:my-7 h-[3px] w-10 rounded-full" style={{ background: "#E5E2D9" }} />

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <GoldCTA label="Hablemos por WhatsApp" size="lg" block />
            <span className="text-xs sm:ml-1" style={{ color: "#a4a7b0" }}>
              Sin costo · Sin compromiso
            </span>
          </div>

          {/* Contact card */}
          <div
            className="mt-8 rounded-xl p-5 sm:p-6"
            style={{ background: CREAM, border: "1px solid #EFEDE6" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p
                  className="text-[15px] font-bold leading-tight"
                  style={{ fontFamily: "'LeagueSpartan', sans-serif", color: NAVY }}
                >
                  Sindy Geisert
                </p>
                <p className="text-[12.5px] mt-0.5" style={{ color: "#6b6e78" }}>
                  Directora Ejecutiva
                </p>
              </div>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-semibold transition-colors"
                style={{ background: NAVY, color: "white", fontFamily: "'LeagueSpartan', sans-serif" }}
                aria-label="Hablar con Sindy por WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                Chatear
              </a>
            </div>

            <ul className="mt-4 grid grid-cols-1 gap-2.5 text-[13px]">
              <li>
                <a
                  href="mailto:sindygeisert@mejoraok.com"
                  className="inline-flex items-center gap-2.5 hover:underline"
                  style={{ color: NAVY_SOFT }}
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">sindygeisert@mejoraok.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+5493764358152"
                  className="inline-flex items-center gap-2.5 hover:underline"
                  style={{ color: NAVY_SOFT }}
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  +54 9 376 435-8152
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/mejoraok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:underline"
                  style={{ color: NAVY_SOFT }}
                >
                  <Instagram className="w-3.5 h-3.5 shrink-0" />
                  @mejoraok
                </a>
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* ── Floating WhatsApp (mobile + desktop) ── */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar por WhatsApp"
        className="fixed z-50 bottom-5 right-5 sm:bottom-7 sm:right-7 inline-flex items-center gap-2.5 pl-4 pr-5 py-3.5 rounded-full font-bold text-[14px] active:scale-95 transition-transform hover:-translate-y-0.5"
        style={{
          background: "#25D366",
          color: "white",
          fontFamily: "'LeagueSpartan', sans-serif",
          boxShadow: "0 14px 30px -8px rgba(37,211,102,0.55), 0 4px 10px rgba(0,0,0,0.12)",
        }}
      >
        <span className="relative grid place-items-center">
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-60"
            style={{ background: "#25D366" }}
            aria-hidden
          />
          <WhatsAppIcon className="w-5 h-5 relative" />
        </span>
        <span className="hidden xs:inline sm:inline">Hablemos</span>
      </a>
    </main>
  );
}
