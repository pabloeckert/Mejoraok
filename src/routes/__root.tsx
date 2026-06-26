import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Mejora Continua — Comunidad de Negocios" },
      { name: "description", content: "Acompañamos a líderes, equipos y organizaciones de Posadas, Misiones a transformar ideas en acciones con impacto." },
      { name: "author", content: "Mejora Continua" },
      { property: "og:title", content: "Mejora Continua — Comunidad de Negocios" },
      { property: "og:description", content: "Acompañamos a líderes, equipos y organizaciones. Nuevo sitio en camino." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mejora Continua — Comunidad de Negocios" },
      { name: "twitter:description", content: "Acompañamos a líderes, equipos y organizaciones." },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        children: `
          (function() {
            var theme = localStorage.getItem('continuum_theme') || 'light';
            if (theme === 'system') {
              theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            if (theme === 'dark') document.documentElement.classList.add('dark');
          })();
        `,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="pb-[env(safe-area-inset-bottom)]">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <div className="animate-page-enter">
        <Outlet />
      </div>
      <Toaster position="top-center" />
    </>
  );
}
