import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Settings } from "lucide-react";

export const Route = createFileRoute("/settings")({
  component: SettingsRedirect,
  head: () => ({
    meta: [
      { title: "Configuración de Cuenta — Mejora Continua" },
      { name: "description", content: "Administración de perfil y preferencias en Mejora Continua." },
    ],
  }),
});

function SettingsRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://app.mejoraok.com";
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center font-sans">
      <div className="max-w-md w-full p-8 rounded-2xl border border-slate-200 shadow-sm bg-white">
        <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1A3D84] flex items-center justify-center mx-auto mb-4">
          <Settings className="w-6 h-6" />
        </div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
          Configuración
        </h1>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          Las preferencias de cuenta se gestionan en el portal unificado. Redirigiendo a <strong>app.mejoraok.com</strong>...
        </p>
        <a
          href="https://app.mejoraok.com"
          className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#1A3D84] text-white font-medium text-sm hover:bg-[#142F68] transition-colors shadow-sm"
        >
          <span>Ir a app.mejoraok.com</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
