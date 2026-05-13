import { useState, useEffect } from "react";

const STORAGE_KEY = "mee_cookies_ok";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0D1B2A] border-t-2 border-[#FCBA05] px-4 py-4 sm:py-3"
      role="dialog"
      aria-label="Aviso de cookies"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
        <p className="text-white/80 text-xs leading-relaxed flex-1">
          Este sitio utiliza cookies técnicas necesarias para su correcto funcionamiento (Google Fonts y sesión).
          No usamos cookies publicitarias ni de rastreo.{" "}
          <a
            href="/cookies"
            className="text-[#FCBA05] hover:underline font-medium whitespace-nowrap"
          >
            Más información
          </a>
        </p>
        <button
          onClick={accept}
          className="shrink-0 bg-[#FCBA05] hover:bg-yellow-400 text-[#0D1B2A] font-bold text-xs px-5 py-2 rounded transition-colors"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}
