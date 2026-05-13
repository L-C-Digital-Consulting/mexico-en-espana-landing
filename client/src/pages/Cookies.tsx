/*
 * Política de Cookies — mexicoenespana.com
 * Responsable: L&C Digital & Consulting, S.L.
 */

export default function Cookies() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#0D1B2A] border-b-4 border-[#FCBA05] py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a href="/" className="text-white/60 text-sm hover:text-white transition-colors mb-4 inline-block">
            ← Volver a mexicoenespana.com
          </a>
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Política de Cookies
          </h1>
          <p className="text-white/50 text-sm mt-2">mexicoenespana.com</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10 text-gray-700 text-sm leading-relaxed">

          {/* 1. ¿Qué son las cookies? */}
          <section>
            <h2 className="text-xl font-bold text-[#0D1B2A] mb-4 border-l-4 border-[#C8102E] pl-4">
              1. ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario cuando este los visita. Su finalidad es facilitar la navegación, recordar preferencias y, en algunos casos, recopilar información estadística sobre el uso del sitio.
            </p>
            <p className="mt-3">
              La presente Política de Cookies tiene por objeto informarle, de conformidad con el artículo 22.2 de la Ley 34/2002, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), y el Reglamento General de Protección de Datos (RGPD), sobre las cookies que utiliza el sitio web <strong>mexicoenespana.com</strong>, su finalidad y cómo puede gestionarlas.
            </p>
          </section>

          {/* 2. Cookies utilizadas */}
          <section>
            <h2 className="text-xl font-bold text-[#0D1B2A] mb-4 border-l-4 border-[#C8102E] pl-4">
              2. Cookies utilizadas en este sitio web
            </h2>
            <p className="mb-4">
              Este sitio web utiliza únicamente cookies técnicas necesarias para su correcto funcionamiento. No se utilizan cookies de seguimiento publicitario, ni se comparten datos de navegación con terceros con fines comerciales.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-xs">
                <thead>
                  <tr className="bg-[#0D1B2A] text-white">
                    <th className="p-3 text-left font-semibold">Cookie / Servicio</th>
                    <th className="p-3 text-left font-semibold">Proveedor</th>
                    <th className="p-3 text-left font-semibold">Finalidad</th>
                    <th className="p-3 text-left font-semibold">Tipo</th>
                    <th className="p-3 text-left font-semibold">Duración</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="align-top">
                    <td className="p-3 font-medium">Google Fonts</td>
                    <td className="p-3">Google LLC (EE.UU.)</td>
                    <td className="p-3">Carga de tipografías externas necesarias para la visualización correcta del sitio web</td>
                    <td className="p-3">Técnica / Necesaria</td>
                    <td className="p-3">Sesión</td>
                  </tr>
                  <tr className="align-top bg-gray-50">
                    <td className="p-3 font-medium">Preferencias de sesión</td>
                    <td className="p-3">mexicoenespana.com</td>
                    <td className="p-3">Mantener el correcto funcionamiento y navegación del sitio durante la sesión del usuario</td>
                    <td className="p-3">Técnica / Necesaria</td>
                    <td className="p-3">Sesión</td>
                  </tr>
                  <tr className="align-top">
                    <td className="p-3 font-medium">Google Analytics (_ga, _ga_*)</td>
                    <td className="p-3">Google LLC (EE.UU.)</td>
                    <td className="p-3">Medir el uso del sitio web: páginas visitadas, tiempo de visita, origen del tráfico. Solo se activan con consentimiento del usuario.</td>
                    <td className="p-3">Analítica / Opcional</td>
                    <td className="p-3">2 años (_ga) / 1 año (_ga_*)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-gray-500">
              Las cookies de sesión se eliminan automáticamente al cerrar el navegador. No se utilizan cookies persistentes de seguimiento ni de publicidad comportamental.
            </p>
          </section>

          {/* 3. Transferencias internacionales */}
          <section>
            <h2 className="text-xl font-bold text-[#0D1B2A] mb-4 border-l-4 border-[#C8102E] pl-4">
              3. Transferencias internacionales de datos
            </h2>
            <p>
              Google Fonts es un servicio prestado por Google LLC, con sede en Estados Unidos. Google LLC dispone de certificaciones y garantías adecuadas conforme al RGPD (Cláusulas Contractuales Tipo aprobadas por la Comisión Europea). Para más información, puede consultar la{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8102E] hover:underline"
              >
                Política de Privacidad de Google
              </a>.
            </p>
          </section>

          {/* 4. Gestión y desactivación */}
          <section>
            <h2 className="text-xl font-bold text-[#0D1B2A] mb-4 border-l-4 border-[#C8102E] pl-4">
              4. Cómo gestionar o desactivar las cookies
            </h2>
            <p>
              Puede configurar su navegador para bloquear o eliminar las cookies en cualquier momento. A continuación le indicamos cómo hacerlo en los navegadores más habituales:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Google Chrome:</strong>{" "}
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#C8102E] hover:underline">
                  Configuración → Privacidad y seguridad → Cookies
                </a>
              </li>
              <li>
                <strong>Mozilla Firefox:</strong>{" "}
                <a href="https://support.mozilla.org/es/kb/proteccion-de-seguimiento-mejorada-en-firefox" target="_blank" rel="noopener noreferrer" className="text-[#C8102E] hover:underline">
                  Opciones → Privacidad y seguridad → Cookies y datos del sitio
                </a>
              </li>
              <li>
                <strong>Safari:</strong>{" "}
                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#C8102E] hover:underline">
                  Preferencias → Privacidad → Gestionar datos del sitio web
                </a>
              </li>
              <li>
                <strong>Microsoft Edge:</strong>{" "}
                <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#C8102E] hover:underline">
                  Configuración → Privacidad, búsqueda y servicios → Cookies
                </a>
              </li>
            </ul>
            <p className="mt-4">
              Tenga en cuenta que la desactivación de cookies técnicas puede afectar al correcto funcionamiento y visualización del sitio web.
            </p>
          </section>

          {/* 5. Actualizaciones */}
          <section>
            <h2 className="text-xl font-bold text-[#0D1B2A] mb-4 border-l-4 border-[#C8102E] pl-4">
              5. Actualizaciones de esta política
            </h2>
            <p>
              L&C Digital & Consulting, S.L. se reserva el derecho a modificar esta Política de Cookies en cualquier momento para adaptarla a cambios legislativos, técnicos o de los servicios ofrecidos. Le recomendamos que la revise periódicamente. Los cambios entrarán en vigor desde el momento de su publicación en este sitio web.
            </p>
          </section>

          {/* 6. Contacto */}
          <section>
            <h2 className="text-xl font-bold text-[#0D1B2A] mb-4 border-l-4 border-[#C8102E] pl-4">
              6. Contacto
            </h2>
            <p>
              Si tiene cualquier duda sobre el uso de cookies en este sitio web, puede contactarnos en:{" "}
              <a href="mailto:miguel.lopez@lycconsulting.com" className="text-[#C8102E] hover:underline">
                miguel.lopez@lycconsulting.com
              </a>
            </p>
          </section>

          {/* Footer del documento */}
          <div className="border-t border-gray-200 pt-8 text-xs text-gray-400 space-y-1">
            <p>Última actualización: mayo de 2026</p>
            <p>L&C Digital & Consulting, S.L. · NIF B22652069 · Calle del Poeta Joan Maragall 23, 28020 Madrid</p>
            <div className="flex gap-4 mt-2">
              <a href="/aviso-legal" className="text-[#C8102E] hover:underline">Aviso Legal</a>
              <a href="/privacidad" className="text-[#C8102E] hover:underline">Política de Privacidad</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
