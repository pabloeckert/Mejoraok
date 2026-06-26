import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: ComingSoonPage,
  head: () => ({
    meta: [
      { title: "Mejora Continua — Comunidad de Negocios" },
      {
        name: "description",
        content:
          "Mejora Continua te acompaña a vos como líder, a tus equipos y a tu organización. Posadas, Misiones.",
      },
      { property: "og:title", content: "Mejora Continua — Comunidad de Negocios" },
      {
        property: "og:description",
        content: "Vos querés resultados. Hablemos ahora, sin costo ni compromiso.",
      },
      { property: "og:image", content: "/ImagenDestacada.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/ImagenDestacada.png" },
      { name: "twitter:title", content: "Mejora Continua — Comunidad de Negocios" },
    ],
  }),
});

const WHATSAPP = "https://wa.me/5493764358152";

function ComingSoonPage() {
  return (
    <>
      <style>{`
        .mc-root, .mc-root *, .mc-root *::before, .mc-root *::after {
          margin: 0; padding: 0; box-sizing: border-box;
        }
        .mc-root {
          font-family: 'BwModelica', 'Segoe UI', sans-serif;
          background: #ffffff;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          color: #0D0D0D;
        }
        .mc-card {
          display: grid;
          grid-template-columns: 420px 1fr;
          max-width: 920px;
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 12px 48px rgba(2,6,89,0.10);
          min-height: 600px;
          background: #ffffff;
        }
        .mc-img {
          overflow: hidden;
          background: #f0f0f0;
          position: relative;
        }
        .mc-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 20% center;
          display: block;
          position: absolute;
          top: 0; left: 0;
        }
        .mc-body {
          background: #ffffff;
          padding: 48px 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 2;
        }
        .mc-logo-wrap { margin-bottom: 32px; }
        .mc-logo-wrap img {
          height: 52px;
          width: auto;
          max-width: 220px;
          display: block;
        }
        .mc-logo-sub {
          font-family: 'BwModelica', sans-serif;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #999;
          margin-top: 8px;
          display: block;
        }
        .mc-badge {
          display: inline-block;
          background: #F2F2F2;
          border: 1px solid #CCCCCC;
          border-radius: 100px;
          padding: 5px 16px;
          font-size: 11px;
          color: #888888;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 24px;
          align-self: flex-start;
        }
        .mc-h1 {
          font-family: 'LeagueSpartan', sans-serif;
          font-weight: 700;
          font-size: clamp(32px, 4vw, 48px);
          color: #020659;
          line-height: 1.05;
          margin-bottom: 16px;
        }
        .mc-tagline {
          font-family: 'LeagueSpartan', sans-serif;
          font-size: 15px;
          color: #656565;
          font-weight: 400;
          margin-bottom: 16px;
          line-height: 1.4;
        }
        .mc-subtext {
          font-size: 14px;
          color: #656565;
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 360px;
        }
        .mc-divider {
          width: 40px;
          height: 3px;
          background: #E0E0E0;
          border-radius: 2px;
          margin-bottom: 32px;
        }
        .mc-cta {
          display: inline-block;
          background: #F2BB16;
          color: #0D0D0D;
          font-family: 'LeagueSpartan', sans-serif;
          font-weight: 700;
          font-size: 15px;
          padding: 14px 32px;
          border-radius: 8px;
          text-decoration: none;
          margin-bottom: 10px;
          align-self: flex-start;
          transition: opacity 0.2s, transform 0.2s;
        }
        .mc-cta:hover { opacity: 0.88; transform: translateY(-1px); }
        .mc-cta-note {
          font-size: 12px;
          color: #bbb;
          margin-bottom: 32px;
        }
        .mc-contact {
          font-size: 13px;
          color: #656565;
          line-height: 2.2;
          border-top: 1px solid #F0F0F0;
          padding-top: 24px;
        }
        .mc-contact strong {
          display: block;
          font-family: 'LeagueSpartan', sans-serif;
          font-size: 15px;
          color: #020659;
          margin-bottom: 2px;
          font-weight: 700;
        }
        .mc-contact a {
          color: #1C4D8C;
          text-decoration: none;
          font-weight: 500;
        }
        .mc-contact a:hover { text-decoration: underline; }
        @media (max-width: 640px) {
          .mc-root { padding: 0; align-items: flex-start; }
          .mc-card {
            grid-template-columns: 1fr;
            border-radius: 0;
            box-shadow: none;
            min-height: 100vh;
          }
          .mc-img { width: 100%; height: 280px; position: relative; }
          .mc-body { width: 100%; padding: 32px 24px 48px; }
          .mc-cta { align-self: stretch; text-align: center; }
        }
      `}</style>

      <div className="mc-root">
        <div className="mc-card">
          <div className="mc-img">
            <img src="/ImagenDestacada.png" alt="Mejora Continua" />
          </div>

          <div className="mc-body">
            <div className="mc-logo-wrap">
              <img src="/MC1A.png" alt="Mejora Continua" />
              <span className="mc-logo-sub">
                Comunidad de Negocios · Posadas, Misiones
              </span>
            </div>

            <span className="mc-badge">Nuevo sitio en camino</span>

            <h1 className="mc-h1">
              VOS QUERÉS<br />
              <span>RESULTADOS.</span>
            </h1>

            <p className="mc-tagline">
              Mejora Continua te acompaña a vos como líder, a tus equipos y a tu organización.
            </p>

            <p className="mc-subtext">
              Las ideas, los procesos y los sueños solo valen si se transforman en acciones con impacto.
              Estamos construyendo algo nuevo para vos. Mientras tanto, escribinos.
            </p>

            <div className="mc-divider" />

            <a className="mc-cta" href={WHATSAPP}>Hablemos ahora</a>
            <span className="mc-cta-note">Sin costo. Sin compromiso.</span>

            <div className="mc-contact">
              <strong>Sindy Geisert</strong>
              Directora Ejecutiva<br />
              <a href="mailto:sindygeisert@mejoraok.com">sindygeisert@mejoraok.com</a><br />
              <a href={WHATSAPP}>+54 9 376 435-8152</a><br />
              <a href="https://instagram.com/mejoraok" target="_blank" rel="noreferrer">@mejoraok</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
