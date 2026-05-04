import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const LOGO_WHITE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/ascente_logo_white_bcd9e595.png";

export default function AvisoLegal() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Aviso Legal — L&C CFO®";
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
        <h1 className="text-3xl font-bold text-[#1C00A8] mb-2">Aviso Legal</h1>
        <p className="text-sm text-gray-500 mb-10">
          L&C Digital &amp; Consulting, S.L. · Última actualización: mayo de 2026
        </p>

        {/* 1. Datos identificativos */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            1. Datos identificativos del titular
          </h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Denominación social", "L&C Digital & Consulting, S.L."],
                  ["NIF", "B22652069Y"],
                  ["Domicilio social", "Calle del Poeta Joan Maragall 23, 28020, Madrid"],
                  ["Correo electrónico", "miguel.lopez@lycconsulting.com"],
                  ["Teléfono", "+34 635 580 883"],
                  [
                    "Actividad",
                    "Servicios de consultoría, análisis empresarial y herramientas digitales",
                  ],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-gray-700 w-1/3">{label}</td>
                    <td className="px-4 py-3 text-gray-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 2. Datos registrales */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            2. Datos registrales
          </h2>
          <p className="text-sm text-gray-600">
            L&amp;C Digital &amp; Consulting, S.L. está inscrita en el Registro Mercantil de
            Madrid.{" "}
            <span className="bg-yellow-100 text-yellow-800 px-1 rounded text-xs font-medium">
              [PENDIENTE: completar con Tomo, Folio, Hoja y Sección del Registro Mercantil]
            </span>
          </p>
        </section>

        {/* 3. Objeto */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            3. Objeto y ámbito de aplicación
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            El presente Aviso Legal regula el acceso y uso del sitio web accesible a través de
            la dirección <strong>lccfo.es</strong> (en adelante, el «Sitio»), titularidad de
            L&amp;C Digital &amp; Consulting, S.L. (en adelante, el «Titular»).
          </p>
          <p className="text-sm text-gray-600">
            El acceso al Sitio implica la aceptación, sin reservas, del presente Aviso Legal.
            Si el usuario no está de acuerdo con alguno de los términos aquí establecidos,
            deberá abstenerse de utilizar el Sitio.
          </p>
        </section>

        {/* 4. Propiedad intelectual */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            4. Propiedad intelectual e industrial
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            Todos los contenidos del Sitio —incluyendo, sin carácter limitativo, textos,
            imágenes, gráficos, logotipos, iconos, marcas y software— son propiedad del
            Titular o de terceros que han autorizado su uso, y están protegidos por la
            normativa española e internacional de propiedad intelectual e industrial.
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Las denominaciones <strong>«L&amp;C CFO®»</strong>,{" "}
            <strong>«Diagnóstico de Claridad Financiera®»</strong> y demás marcas registradas
            que puedan figurar en el Sitio son propiedad del Titular o de empresas de su
            grupo. Su uso no autorizado constituye una infracción de los derechos de propiedad
            intelectual e industrial.
          </p>
          <p className="text-sm text-gray-600">
            Queda prohibida la reproducción total o parcial, distribución, comunicación
            pública, transformación o cualquier otra forma de explotación de los contenidos
            del Sitio sin la autorización expresa y por escrito del Titular.
          </p>
        </section>

        {/* 5. Responsabilidad */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            5. Responsabilidad y garantías
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            El Titular pone todos los medios razonables para garantizar la disponibilidad,
            continuidad y correcto funcionamiento del Sitio, aunque no puede garantizar la
            ausencia de interrupciones o errores técnicos.
          </p>
          <p className="text-sm text-gray-600 mb-2">
            La información publicada en el Sitio tiene carácter meramente informativo y no
            constituye asesoramiento fiscal, jurídico, financiero ni de inversión. El Titular
            no asume responsabilidad alguna derivada del uso de dicha información.
          </p>
          <p className="text-sm text-gray-600">
            El Titular no se hace responsable de los daños que pudieran derivarse del acceso
            a sitios de terceros enlazados desde el Sitio, cuyo contenido y políticas son
            ajenos al Titular.
          </p>
        </section>

        {/* 6. Legislación */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            6. Legislación aplicable y jurisdicción
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            El presente Aviso Legal se rige por la legislación española, en particular por:
          </p>
          <ul className="space-y-1 text-sm text-gray-600 mb-3">
            {[
              "Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE).",
              "Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD).",
              "Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#1C00A8] font-bold shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-600">
            Para la resolución de cualquier controversia derivada del uso del Sitio, las
            partes se someten, con renuncia expresa a cualquier otro fuero, a los Juzgados y
            Tribunales de la ciudad de Madrid.
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
