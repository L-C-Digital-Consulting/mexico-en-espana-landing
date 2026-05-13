/*
 * Política de Privacidad — mexicoenespana.com
 * Responsable: L&C Digital & Consulting, S.L.
 */

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#0D1B2A] border-b-4 border-[#FCBA05] py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a href="/" className="text-white/60 text-sm hover:text-white transition-colors mb-4 inline-block">
            ← Volver a mexicoenespana.com
          </a>
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Política de Privacidad
          </h1>
          <p className="text-white/50 text-sm mt-2">mexicoenespana.com</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10 text-gray-700 text-sm leading-relaxed">

          {/* 1. Responsable */}
          <section>
            <h2 className="text-xl font-bold text-[#0D1B2A] mb-4 border-l-4 border-[#C8102E] pl-4">
              1. Identificación y datos de contacto del Responsable
            </h2>
            <div className="bg-gray-50 border border-gray-200 p-6 space-y-1">
              <p><strong>Responsable del tratamiento:</strong> L&C Digital & Consulting, S.L.</p>
              <p><strong>NIF:</strong> B22652069</p>
              <p><strong>Domicilio:</strong> Calle del Poeta Joan Maragall 23, 28020 Madrid</p>
              <p><strong>Registro Mercantil:</strong> Madrid, Hoja M-859195, Inscripción 1ª</p>
              <p><strong>Contacto de privacidad:</strong> miguel.lopez@lycconsulting.com</p>
            </div>
            <p className="mt-4">
              L&C Digital & Consulting, S.L. (en adelante, "el Responsable") es responsable del tratamiento de sus datos personales como usuario del sitio web <strong>mexicoenespana.com</strong>. Esta Política de Privacidad tiene por objeto facilitar información sobre el uso que realizamos de sus datos personales y sobre los derechos que le asisten en virtud del Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
            </p>
            <p className="mt-3">
              Si tiene cualquier duda relativa al tratamiento de sus datos personales, puede contactarnos en: <a href="mailto:miguel.lopez@lycconsulting.com" className="text-[#C8102E] hover:underline">miguel.lopez@lycconsulting.com</a>
            </p>
          </section>

          {/* 2. Información necesaria */}
          <section>
            <h2 className="text-xl font-bold text-[#0D1B2A] mb-4 border-l-4 border-[#C8102E] pl-4">
              2. Información necesaria y actualizada
            </h2>
            <p>
              Los campos marcados como obligatorios en los formularios del Sitio Web son de cumplimentación necesaria; su omisión podría impedir que se le faciliten los servicios o información solicitados. Deberá proporcionar información verídica y comunicarnos a la mayor brevedad posible cualquier modificación de sus datos personales.
            </p>
            <p className="mt-3">
              Al enviar un formulario o iniciar una comunicación a través de WhatsApp, declara que la información facilitada es exacta y veraz.
            </p>
          </section>

          {/* 3. Tratamientos */}
          <section>
            <h2 className="text-xl font-bold text-[#0D1B2A] mb-4 border-l-4 border-[#C8102E] pl-4">
              3. Información detallada de los tratamientos realizados
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-xs">
                <thead>
                  <tr className="bg-[#0D1B2A] text-white">
                    <th className="p-3 text-left font-semibold">Finalidad</th>
                    <th className="p-3 text-left font-semibold">Base legal</th>
                    <th className="p-3 text-left font-semibold">Destinatarios</th>
                    <th className="p-3 text-left font-semibold">Plazo de conservación</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="align-top">
                    <td className="p-3">Gestionar las consultas recibidas a través del formulario de contacto (Google Forms) o por WhatsApp</td>
                    <td className="p-3">Interés legítimo del Responsable para atender requerimientos de información</td>
                    <td className="p-3">Sus datos pueden ser accedidos por los profesionales de Next Abogados y Ascente CFO® encargados de atender su solicitud. Google LLC actúa como encargado del tratamiento en la prestación del servicio Google Forms. WhatsApp Ireland Ltd. actúa como encargado en las comunicaciones vía WhatsApp.</td>
                    <td className="p-3">Hasta la resolución de su solicitud de información</td>
                  </tr>
                  <tr className="align-top bg-gray-50">
                    <td className="p-3">Gestionar la relación precontractual y contractual derivada de la contratación de servicios de asesoramiento legal, fiscal o financiero</td>
                    <td className="p-3">Ejecución de un contrato o aplicación de medidas precontractuales a petición del interesado</td>
                    <td className="p-3">Sus datos podrán ser cedidos a Next Abogados (Compañía de Abogados Núñez Blázquez SLP) y a los profesionales colaboradores necesarios para la prestación del servicio contratado</td>
                    <td className="p-3">Durante la vigencia de la relación contractual y, una vez finalizada, durante los plazos de prescripción legal aplicables (con carácter general, 5 años)</td>
                  </tr>
                  <tr className="align-top">
                    <td className="p-3">Cumplimiento de obligaciones legales (fiscales, contables, mercantiles)</td>
                    <td className="p-3">Cumplimiento de una obligación legal aplicable al Responsable</td>
                    <td className="p-3">Administraciones públicas competentes (AEAT, Registro Mercantil, etc.) cuando así lo exija la normativa vigente</td>
                    <td className="p-3">Durante los plazos establecidos por la legislación fiscal, mercantil y contable aplicable</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-gray-500">
              No cedemos sus datos personales a terceros salvo que exista obligación legal o se trate de profesionales colaboradores necesarios para prestarle el servicio. Puede solicitar mayor detalle sobre los destinatarios escribiendo a miguel.lopez@lycconsulting.com.
            </p>
          </section>

          {/* 4. Derechos */}
          <section>
            <h2 className="text-xl font-bold text-[#0D1B2A] mb-4 border-l-4 border-[#C8102E] pl-4">
              4. Ejercicio de sus derechos
            </h2>
            <p>En virtud del RGPD, usted puede ejercer los siguientes derechos:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Acceso:</strong> conocer qué datos suyos están siendo tratados y las operaciones de tratamiento llevadas a cabo.</li>
              <li><strong>Rectificación:</strong> corregir cualquier dato personal inexacto.</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de sus datos cuando sea procedente.</li>
              <li><strong>Limitación del tratamiento:</strong> solicitar la suspensión del tratamiento cuando resulte dudosa su exactitud, legalidad o necesidad.</li>
              <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado cuando la base legal sea el contrato o el consentimiento.</li>
              <li><strong>Oposición:</strong> oponerse al tratamiento cuando la base legal sea el interés legítimo, salvo que exista un interés legítimo imperioso o para la formulación o defensa de reclamaciones.</li>
              <li><strong>Revocación del consentimiento:</strong> en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.</li>
            </ul>
            <p className="mt-4">
              Puede ejercitar sus derechos de forma gratuita en cualquier momento enviando un correo a <a href="mailto:miguel.lopez@lycconsulting.com" className="text-[#C8102E] hover:underline">miguel.lopez@lycconsulting.com</a>, indicando el derecho que desea ejercitar y adjuntando copia de su documento de identidad.
            </p>
            <p className="mt-3">
              Si considera que no hemos tratado sus datos adecuadamente, tiene derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos</strong> (www.aepd.es).
            </p>
          </section>

          {/* 5. Cookies */}
          <section>
            <h2 className="text-xl font-bold text-[#0D1B2A] mb-4 border-l-4 border-[#C8102E] pl-4">
              5. Cookies
            </h2>
            <p>
              Este Sitio Web utiliza Google Fonts (fuentes tipográficas servidas por Google LLC) y puede utilizar herramientas de analítica web de carácter no intrusivo. No se utilizan cookies de seguimiento publicitario ni se comparten datos de navegación con terceros con fines comerciales.
            </p>
            <p className="mt-3">
              Para más información, consulte nuestra{" "}
              <a href="/cookies" className="text-[#C8102E] hover:underline font-medium">Política de Cookies</a>.
            </p>
          </section>

          {/* 6. Seguridad */}
          <section>
            <h2 className="text-xl font-bold text-[#0D1B2A] mb-4 border-l-4 border-[#C8102E] pl-4">
              6. Medidas de seguridad
            </h2>
            <p>
              L&C Digital & Consulting, S.L. adopta los niveles de seguridad requeridos por el RGPD, adecuados a la naturaleza de los datos tratados en cada momento, con el fin de evitar su alteración, pérdida, tratamiento o acceso no autorizado. No obstante, la seguridad técnica en un medio como Internet no es inexpugnable; el Responsable pone todos los medios a su alcance para evitar actuaciones dolosas de terceros.
            </p>
          </section>

          {/* 7. Menores */}
          <section>
            <h2 className="text-xl font-bold text-[#0D1B2A] mb-4 border-l-4 border-[#C8102E] pl-4">
              7. Menores de edad
            </h2>
            <p>
              Los menores de edad no podrán usar los servicios disponibles a través de este Sitio Web sin la previa autorización de sus padres, tutores o representantes legales, quienes serán los únicos responsables de todos los actos realizados a través del Sitio Web por los menores a su cargo, incluyendo la cumplimentación de formularios con datos personales de dichos menores.
            </p>
          </section>

          {/* Footer del documento */}
          <div className="border-t border-gray-200 pt-8 text-xs text-gray-400 space-y-1">
            <p>Última actualización: mayo de 2026</p>
            <p>L&C Digital & Consulting, S.L. · NIF B22652069 · Calle del Poeta Joan Maragall 23, 28020 Madrid</p>
            <div className="flex gap-4 mt-2">
              <a href="/aviso-legal" className="text-[#C8102E] hover:underline">Aviso Legal</a>
              <a href="/cookies" className="text-[#C8102E] hover:underline">Política de Cookies</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
