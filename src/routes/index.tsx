import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Instagram, MessageCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: ComingSoonPage,
  head: () => ({
    meta: [
      { title: "Mejora Continua — Comunidad de Negocios | Posadas, Misiones" },
      {
        name: "description",
        content:
          "Mejora Continua acompaña a líderes, equipos y organizaciones a transformar ideas en acciones con impacto. Nuevo sitio en camino.",
      },
      { property: "og:title", content: "Mejora Continua — Comunidad de Negocios" },
      {
        property: "og:description",
        content:
          "Acompañamos a líderes, equipos y organizaciones. Nuevo sitio en camino. Mientras tanto, hablemos.",
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
const CREAM = "#F5F3EE";

function ComingSoonPage() {
  return (
    <main
      className="min-h-screen w-full flex items-center justify-center px-0 sm:px-6 py-0 sm:py-10"
      style={{ fontFamily: "'BwModelica', 'Plus Jakarta Sans', sans-serif", background: CREAM }}
    >
      <article
        className="w-full max-w-[1040px] grid grid-cols-1 md:grid-cols-[minmax(0,440px)_1fr] bg-white sm:rounded-2xl overflow-hidden md:min-h-[640px]"
        style={{ boxShadow: "0 24px 70px -20px rgba(2,6,89,0.18)" }}
      >
        {/* Image side */}
        <div className="relative bg-[#eef0f4] h-[280px] sm:h-[340px] md:h-auto">
          <img
            src="/ImagenDestacada.png"
            alt="Mejora Continua — líder enfocado en resultados"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "18% center" }}
          />
          <div
            className="absolute inset-0 md:hidden"
            style={{ background: "linear-gradient(180deg, rgba(2,6,89,0) 60%, rgba(2,6,89,0.35) 100%)" }}
          />
        </div>

        {/* Content side */}
        <div className="px-7 sm:px-12 py-10 sm:py-14 flex flex-col justify-center relative">
          {/* Logo */}
          <div className="mb-8 sm:mb-10">
            <img src="/MC1A.png" alt="Mejora Continua" className="h-12 sm:h-14 w-auto" />
            <p
              className="mt-2.5 text-[10px] tracking-[0.25em] uppercase"
              style={{ color: "#9aa0ad" }}
            >
              Comunidad de Negocios · Posadas, Misiones
            </p>
          </div>

          {/* Badge */}
          <span
            className="self-start inline-block px-3.5 py-1 rounded-full text-[10px] tracking-[0.18em] uppercase mb-6"
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
            className="text-[34px] sm:text-[44px] md:text-[52px] font-bold tracking-tight leading-[1.02]"
            style={{ fontFamily: "'LeagueSpartan', sans-serif", color: NAVY }}
          >
            VOS QUERÉS
            <br />
            <span style={{ color: NAVY }}>RESULTADOS.</span>
          </h1>

          {/* Tagline */}
          <p
            className="mt-5 text-[15px] sm:text-base leading-relaxed max-w-md"
            style={{ color: "#525560", fontFamily: "'LeagueSpartan', sans-serif", fontWeight: 400 }}
          >
            Mejora Continua te acompaña a vos como líder, a tus equipos y a tu organización.
          </p>

          <p className="mt-4 text-sm leading-[1.75] max-w-md" style={{ color: "#6b6e78" }}>
            Las ideas, los procesos y los sueños solo valen si se transforman en acciones con impacto.
            Estamos construyendo algo nuevo para vos. Mientras tanto, escribinos.
          </p>

          {/* Divider */}
          <div className="my-7 h-[3px] w-10 rounded-full" style={{ background: "#E5E2D9" }} />

          {/* CTA */}
          <a
            href="https://wa.me/5493764358152"
            target="_blank"
            rel="noopener noreferrer"
            className="group self-start inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-bold transition-all duration-200 active:scale-[0.98] hover:-translate-y-[1px]"
            style={{
              background: GOLD,
              color: "#0D0D0D",
              fontFamily: "'LeagueSpartan', sans-serif",
              boxShadow: "0 10px 24px -10px rgba(242,187,22,0.55)",
            }}
          >
            Hablemos ahora
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <span className="mt-2 text-xs" style={{ color: "#b4b7bf" }}>
            Sin costo. Sin compromiso.
          </span>

          {/* Contact */}
          <div className="mt-8 pt-6 border-t" style={{ borderColor: "#EFEDE6" }}>
            <p
              className="text-[15px] font-bold leading-tight"
              style={{ fontFamily: "'LeagueSpartan', sans-serif", color: NAVY }}
            >
              Sindy Geisert
            </p>
            <p className="text-[13px] mt-0.5" style={{ color: "#6b6e78" }}>
              Directora Ejecutiva
            </p>

            <ul className="mt-4 space-y-2.5 text-[13px]">
              <li>
                <a
                  href="mailto:sindygeisert@mejoraok.com"
                  className="inline-flex items-center gap-2.5 hover:underline"
                  style={{ color: NAVY_SOFT }}
                >
                  <Mail className="w-3.5 h-3.5" />
                  sindygeisert@mejoraok.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5493764358152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:underline"
                  style={{ color: NAVY_SOFT }}
                >
                  <Phone className="w-3.5 h-3.5" />
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
                  <Instagram className="w-3.5 h-3.5" />
                  @mejoraok
                </a>
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* Floating WhatsApp on mobile */}
      <a
        href="https://wa.me/5493764358152"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar por WhatsApp"
        className="md:hidden fixed bottom-5 right-5 w-14 h-14 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
        style={{ background: GOLD, color: "#0D0D0D" }}
      >
        <MessageCircle className="w-6 h-6" strokeWidth={2.4} />
      </a>
    </main>
  );
}
