import { useState, useEffect } from "react";

const STORAGE_KEY = "mee_cookies_ok";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function updateGAConsent(granted: boolean) {
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
    });
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    updateGAConsent(true);
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "0");
    updateGAConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0D1B2A] border-t-2 border-[#FCBA05] px-4 py-4"
      role="dialog"
      aria-label="Aviso de cookies"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-white/80 text-xs leading-relaxed flex-1">
          Usamos cookies propias y de Google Analytics para medir el uso del sitio y mejorar nuestros servicios.
          Puedes aceptarlas o rechazarlas.{" "}
          <a href="/cookies" className="text-[#FCBA05] hover:underline font-medium whitespace-nowrap">
            Más información
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="text-xs px-4 py-2 rounded border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="text-xs px-5 py-2 rounded font-bold text-[#0D1B2A] bg-[#FCBA05] hover:bg-yellow-400 transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
