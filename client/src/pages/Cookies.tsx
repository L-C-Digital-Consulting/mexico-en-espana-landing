import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const LOGO_WHITE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/ascente_logo_white_bcd9e595.png";

export default function Cookies() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Política de Cookies — L&C CFO®";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-[#1C00A8] py-4 px-6 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <img src={LOGO_WHITE} alt="L&C CFO®" className="h-8" />
          <Link href="/">
            <a className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
              <ArrowLeft size={16} />
              Volver
            </a>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-[#1C00A8] mb-2">Política de Cookies</h1>
        <p className="text-sm text-gray-500 mb-10">
          L&C Digital &amp; Consulting, S.L. · Última actualización: mayo de 2026
        </p>

        {/* Intro */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            1. ¿Qué son las cookies?
          </h2>
          <p className="text-sm text-gray-600">
            Las cookies son pequeños archivos de texto que los sitios web almacenan en el
            dispositivo del usuario para recordar preferencias, analizar el tráfico o
            personalizar la experiencia de navegación. La normativa europea (Directiva
            2009/136/CE, transpuesta en España mediante la LSSI-CE) exige informar al usuario
            sobre las cookies utilizadas y, cuando proceda, obtener su consentimiento.
          </p>
        </section>

        {/* Estado actual */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            2. Cookies utilizadas en este sitio
          </h2>

          {/* Aviso destacado */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800 font-medium">
              Este sitio web no instala cookies propias de seguimiento ni de publicidad.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1C00A8] text-white">
                  <th className="px-4 py-3 text-left font-medium">Origen</th>
                  <th className="px-4 py-3 text-left font-medium">Tipo</th>
                  <th className="px-4 py-3 text-left font-medium">Descripción</th>
                  <th className="px-4 py-3 text-left font-medium">Datos personales</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-700">Umami Analytics</td>
                  <td className="px-4 py-3 text-gray-600">Analítica (sin cookies)</td>
                  <td className="px-4 py-3 text-gray-600">
                    Herramienta de analítica web de código abierto. Mide visitas, páginas
                    vistas y acciones de forma agregada. <strong>No instala cookies</strong> y
                    no rastrea usuarios individuales entre sesiones.
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                      No recoge
                    </span>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-700">Google Fonts</td>
                  <td className="px-4 py-3 text-gray-600">Fuentes tipográficas (externo)</td>
                  <td className="px-4 py-3 text-gray-600">
                    Las tipografías DM Sans e Inter se cargan desde servidores de Google. Esta
                    solicitud puede transmitir la dirección IP del usuario a servidores de
                    Google LLC (EE. UU.), sujetos a las garantías del Data Privacy Framework
                    UE-EE. UU. Google declara no almacenar estos datos de forma identificable.
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                      IP transitoria
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500">
            Nota: al hacer clic en el botón de compra, el usuario es redirigido al dominio
            externo <strong>tally.so</strong>, que tiene su propia política de cookies y
            privacidad, ajena al Titular de este sitio.
          </p>
        </section>

        {/* Consentimiento */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            3. Consentimiento y base jurídica
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            Dado que este sitio no instala cookies que requieran consentimiento previo (no hay
            cookies de publicidad, seguimiento o redes sociales), no es necesario mostrar un
            banner de aceptación según la Guía sobre el uso de las cookies de la AEPD
            (actualización 2023).
          </p>
          <p className="text-sm text-gray-600">
            La carga de Google Fonts se realiza al amparo del interés legítimo del Titular en
            garantizar la correcta presentación del sitio (art. 6.1.f RGPD), dado que Google
            declara no almacenar datos identificables de las solicitudes de fuentes.
          </p>
        </section>

        {/* Cómo desactivar */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            4. Cómo gestionar las cookies en el navegador
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            El usuario puede configurar su navegador para bloquear o eliminar cookies. A
            continuación, encontrará los enlaces de ayuda de los principales navegadores:
          </p>
          <ul className="space-y-1 text-sm">
            {[
              ["Google Chrome", "https://support.google.com/chrome/answer/95647"],
              ["Mozilla Firefox", "https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"],
              ["Microsoft Edge", "https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406"],
              ["Safari", "https://support.apple.com/es-es/guide/safari/sfri11471/mac"],
            ].map(([browser, url], i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#1C00A8] font-bold shrink-0">·</span>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1C00A8] underline underline-offset-2"
                >
                  {browser}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Modificaciones */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            5. Actualizaciones de esta política
          </h2>
          <p className="text-sm text-gray-600">
            El Titular se reserva el derecho a modificar esta Política de Cookies en cualquier
            momento, para adaptarla a cambios normativos o técnicos. La versión vigente estará
            siempre disponible en esta página. Para cualquier consulta:{" "}
            <a
              href="mailto:miguel.lopez@lycconsulting.com"
              className="text-[#1C00A8] underline underline-offset-2"
            >
              miguel.lopez@lycconsulting.com
            </a>
            .
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-6 px-6 text-center text-xs text-gray-400">
        L&amp;C Digital &amp; Consulting, S.L. · NIF B22652069Y · Madrid, España
      </footer>
    </div>
  );
}
