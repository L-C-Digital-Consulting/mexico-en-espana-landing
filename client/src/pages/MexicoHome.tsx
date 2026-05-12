/*
 * México en España — Landing Page
 * Next Abogados · Ascente
 * Light bg: white / gray-50 · Accent: #C8102E (España) · #006847 (México) · Dark: #0D1B2A
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Shield,
  Users,
  TrendingUp,
  Briefcase,
  FileText,
  Globe,
  Building2,
  Calculator,
  Scale,
  Star,
  Phone,
} from "lucide-react";

const HERO_BG = "/hero-madrid.png";
const ES_RED = "#C8102E";
const ES_YELLOW = "#FCBA05";
const MX_GREEN = "#006847";
const DARK = "#0D1B2A";

const WHATSAPP_LINK =
  "https://wa.me/34635580883?text=Hola%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20instalarme%20en%20Espa%C3%B1a.";
const WHATSAPP_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/whatsapp_logo_09eed037.png";
const TALLY_LINK = "https://forms.gle/K2jUxAYeHfpaxSYf8";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/miguel-ángel-lópez-sainz-0bb25341";
// ─── ANIMATION VARIANTS ───
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── NAVBAR ───
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-3">
          <span
            className={`font-bold text-lg transition-colors ${scrolled ? "text-[#0D1B2A]" : "text-white"}`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <span className="text-[#006847]">México</span>{" "}
            <span className={scrolled ? "text-[#0D1B2A]/50" : "text-white/50"}>en</span>{" "}
            <span className="text-[#C8102E]">España</span>
          </span>
        </a>
        <div className={`hidden md:flex items-center gap-8 text-sm transition-colors ${scrolled ? "text-[#0D1B2A]/70" : "text-white/80"}`}>
          <a href="#por-que-espana" className="hover:text-[#C8102E] transition-colors">
            ¿Por qué España?
          </a>
          <a href="#tu-camino" className="hover:text-[#C8102E] transition-colors">
            Tu camino
          </a>
          <a href="#servicios" className="hover:text-[#C8102E] transition-colors">
            Servicios
          </a>
          <a href="#equipo" className="hover:text-[#C8102E] transition-colors">
            Equipo
          </a>
        </div>
        <a
          href={TALLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#A30D24] text-white font-semibold px-5 py-2 text-sm transition-colors"
        >
          Cuéntanos tu situación
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
}

// ─── HERO ───
function HeroSection() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
        minHeight: "clamp(480px, 75vh, 780px)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/90 via-[#0D1B2A]/65 to-[#0D1B2A]/35" />
      {/* España flag — vertical accent bar on left edge */}
      <div className="absolute left-0 top-0 bottom-0 flex" style={{ width: '18px', zIndex: 2 }}>
        <div className="flex-1 bg-[#C8102E]" />
        <div style={{ flex: 2 }} className="bg-[#FCBA05]" />
        <div className="flex-1 bg-[#C8102E]" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full" style={{ paddingLeft: 'max(1rem, 30px)' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/60 font-semibold text-xs tracking-widest uppercase mb-6 border-l-2 border-[#FCBA05] pl-4">
              Next Abogados · Ascente — Madrid
            </p>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Acompañando a<br />
              <span style={{ color: '#006847' }}>México</span>{" "}
              <span className="text-white">en</span>{" "}
              <span className="text-[#C8102E]">España.</span>
            </h1>
            <p className="text-lg text-white/80 mb-4 max-w-2xl">
              Asesoramiento jurídico, fiscal y financiero integral para mexicanos
              que quieren instalarse, emprender o invertir en España.
            </p>
            <p className="text-base font-semibold text-[#FCBA05] mb-10">
              Un mexicano en el equipo. Todo bajo un mismo techo en Madrid.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={TALLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#A30D24] text-white font-semibold px-8 py-4 text-base transition-colors"
              >
                Cuéntanos tu situación
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 text-base transition-colors"
              >
                <img src={WHATSAPP_LOGO} alt="WhatsApp" className="w-5 h-5 object-contain" />
                WhatsApp
              </a>
            </div>
          </motion.div>

      </div>
    </section>
  );
}

// ─── POR QUÉ ESPAÑA ───
const stats = [
  {
    value: "2 años",
    label: "de residencia legal para solicitar la nacionalidad española",
  },
  {
    value: "90 días",
    label: "sin visado para entrar al Espacio Schengen (26 países)",
  },
  {
    value: "Doble",
    label: "nacionalidad permitida entre México y España",
  },
  {
    value: "+180k",
    label: "mexicanos residentes en España — y creciendo",
  },
];

function PorQueEspanaSection() {
  return (
    <section id="por-que-espana" className="bg-gray-50 py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C8102E] font-semibold text-sm tracking-widest uppercase mb-3">
            Por qué España
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Un destino natural para el mexicano
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            La afinidad cultural, el idioma compartido y los acuerdos bilaterales
            hacen de España la puerta de entrada a Europa más natural para
            familias, emprendedores e inversores mexicanos.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`bg-white border p-8 text-center transition-colors ${
                i % 2 === 0
                  ? "border-gray-200 hover:border-[#C8102E]"
                  : "border-gray-200 hover:border-[#FCBA05]"
              }`}
            >
              <p
                className="text-4xl font-bold mb-3"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: i % 2 === 0 ? "#C8102E" : "#FCBA05",
                }}
              >
                {s.value}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── TU CAMINO ───
const momentos = [
  {
    num: "01",
    titulo: "Antes de salir de México",
    desc: "Elección del visado adecuado: no lucrativa, nómada digital, emprendedor o trabajo. Un error aquí puede cerrar puertas.",
  },
  {
    num: "02",
    titulo: "Llegada a España",
    desc: "NIE, TIE, empadronamiento y apertura de cuenta bancaria.",
  },
  {
    num: "03",
    titulo: "Estructura fiscal",
    desc: "Aplicación de la Ley Beckham y planificación patrimonial internacional. La ventaja fiscal que solo existe si se planifica antes de llegar.",
  },
  {
    num: "04",
    titulo: "Tu empresa en España",
    desc: "Constitución de sociedad, contabilidad, impuestos y laboral. Del proyecto empresarial a la operación real.",
  },
  {
    num: "05",
    titulo: "Consolidación",
    desc: "Nacionalidad española, reagrupación familiar y planificación sucesoria. El largo plazo bien estructurado.",
  },
];

function TuCaminoSection() {
  return (
    <section id="tu-camino" className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C8102E] font-semibold text-sm tracking-widest uppercase mb-3">
            El proceso
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Los 5 momentos críticos del mexicano en España
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            En cada uno de estos momentos, un error de planificación puede costar
            tiempo, dinero y la viabilidad del proyecto. Nosotros los cubrimos todos.
          </p>
        </motion.div>
        <div className="space-y-4">
          {momentos.map((m, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`flex gap-6 bg-gray-50 border p-6 transition-colors ${
                i % 2 === 0
                  ? "border-gray-200 hover:border-[#C8102E]"
                  : "border-gray-200 hover:border-[#FCBA05]"
              }`}
            >
              <div className="flex-shrink-0">
                <span
                  className="text-4xl font-bold"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: i % 2 === 0 ? "#C8102E66" : "#FCBA0566",
                  }}
                >
                  {m.num}
                </span>
              </div>
              <div>
                <h3
                  className="font-bold text-[#0D1B2A] text-lg mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {m.titulo}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── LEY BECKHAM ───
function LeyBeckhamSection() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-12">
          <p className="text-[#C8102E] font-semibold text-sm tracking-widest uppercase mb-3">
            La ventaja fiscal
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Ley Beckham — tributa al 24% en lugar del 54%
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Si llegas bien asesorado, puedes acogerte al régimen especial de
            impatriados. Esta ventaja solo existe si se planifica{" "}
            <strong>antes de llegar</strong> — una vez en España, puede ser tarde.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Sin planificación — amarillo España */}
          <motion.div
            variants={fadeUp}
            className="bg-[#FCBA05] p-8 text-center relative overflow-hidden"
          >
            <p className="text-sm text-[#0D1B2A]/70 font-semibold uppercase tracking-widest mb-4">
              Sin planificación
            </p>
            <p
              className="text-6xl font-bold text-[#0D1B2A] mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              54%
            </p>
            <p className="text-[#0D1B2A]/70 text-sm">
              Régimen general IRPF — tributación sobre renta mundial con escala
              progresiva (19% a 54%)
            </p>
          </motion.div>

          {/* Con Ley Beckham — rojo España */}
          <motion.div
            variants={fadeUp}
            className="bg-[#C8102E] p-8 text-center relative overflow-hidden"
          >
            <div className="absolute top-3 right-3 bg-[#FCBA05] text-[#0D1B2A] text-xs font-bold px-2 py-1 max-w-[45%] text-center leading-tight">
              CON PLANIFICACIÓN
            </div>
            <p className="text-sm text-[#FCBA05] font-semibold uppercase tracking-widest mb-4 mt-8">
              Con Ley Beckham
            </p>
            <p
              className="text-6xl font-bold text-white mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              24%
            </p>
            <p className="text-white/80 text-sm">
              Tipo fijo hasta 600.000€ anuales, tributando solo por rentas de
              fuente española
            </p>
          </motion.div>
        </div>

        <motion.div variants={fadeUp}>
          <p className="text-[#0D1B2A] font-semibold mb-4">
            Perfiles que habitualmente pueden acogerse:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Ejecutivos desplazados por multinacionales o contratados por empresa española",
              "Emprendedores con actividad económica calificada como innovadora",
              "Nómadas digitales con visado de teletrabajo internacional",
              "Cónyuge e hijos menores de 25 años — extensión al núcleo familiar desde 2023",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-gray-200 p-4">
                <CheckCircle2 className="w-5 h-5 text-[#006847] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── SERVICIOS ───
const bloques = [
  {
    icon: Scale,
    titulo: "Next Abogados",
    subtitulo: "Asesoramiento jurídico",
    variant: "red" as const,
    servicios: [
      "Derecho Fiscal e IRPF",
      "Fiscalidad Internacional",
      "Derecho Mercantil y Societario",
      "Constitución de sociedades",
      "Derecho Inmobiliario",
      "Convenio doble imposición MX-ES",
      "Planificación sucesoria",
      "Derecho Procesal",
      "Derecho Laboral",
      "Derecho Migratorio",
    ],
  },
  {
    icon: FileText,
    titulo: "Ascente",
    subtitulo: "Compliance y administración",
    variant: "yellow" as const,
    servicios: [
      "Altas iniciales (NIE, AEAT, S.Social)",
      "Contabilidad mensual",
      "Cierres y Cuentas Anuales",
      "Impuestos periódicos (IVA, IS, IRPF)",
      "Nóminas y laboral",
      "Modelo 151 (régimen impatriados)",
      "Libros y legalización",
      "Relación con la AEAT",
    ],
  },
  {
    icon: TrendingUp,
    titulo: "Ascente CFO®",
    subtitulo: "Dirección financiera",
    variant: "red" as const,
    servicios: [
      "Diagnóstico de Claridad Financiera®",
      "Planeación Financiera Mensual®",
      "Presupuesto Estratégico Anual®",
      "Análisis de Decisiones Críticas®",
      "Optimización de Rentabilidad y Caja®",
      "Estrategia de Deuda y Capital®",
      "Validación de Nuevos Negocios®",
    ],
  },
];

function ServiciosSection() {
  return (
    <section id="servicios" className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C8102E] font-semibold text-sm tracking-widest uppercase mb-3">
            Servicios
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Todo bajo un mismo techo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Sin coordinar tres despachos distintos. Abogados, fiscalistas y
            dirección financiera integrados en Madrid.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {bloques.map((b, i) => {
            const isYellow = b.variant === "yellow";
            // red cards: white text, yellow accents, dark icon box
            // yellow card: dark text, red accents, dark icon box
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`p-8 flex flex-col ${
                  isYellow ? "bg-[#FCBA05]" : "bg-[#C8102E]"
                }`}
              >
                <div className="w-10 h-10 bg-[#0D1B2A] flex items-center justify-center mb-5">
                  <b.icon
                    className={`w-5 h-5 ${
                      isYellow ? "text-[#FCBA05]" : "text-[#C8102E]"
                    }`}
                  />
                </div>
                <h3
                  className={`font-bold text-xl mb-1 ${
                    isYellow ? "text-[#0D1B2A]" : "text-white"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {b.titulo}
                </h3>
                <p
                  className={`text-sm mb-6 font-semibold ${
                    isYellow ? "text-[#C8102E]" : "text-[#FCBA05]"
                  }`}
                >
                  {b.subtitulo}
                </p>
                <ul className="space-y-2 flex-1">
                  {b.servicios.map((s, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          isYellow ? "text-[#0D1B2A]" : "text-white"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          isYellow ? "text-[#0D1B2A]/80" : "text-white/90"
                        }`}
                      >
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── MIGUEL ÁNGEL — EL PUENTE ───
function MiguelSection() {
  return (
    <section id="equipo" className="bg-gray-50 py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Foto + bio */}
          <motion.div variants={fadeUp} className="flex gap-8 items-start flex-col sm:flex-row md:flex-col lg:flex-row">
            <div className="relative flex-shrink-0">
              <img
                src="/team/miguel.jpg"
                alt="Miguel Ángel López"
                className="w-36 h-44 object-cover object-top border-4 border-white shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-[#C8102E] px-2 py-1">
                <p className="text-white text-xs font-bold">🇲🇽 CFO</p>
              </div>
            </div>
            <div>
              <p className="text-[#C8102E] font-semibold text-sm tracking-widest uppercase mb-2">
                Hecho en México
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#0D1B2A] mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Un mexicano acompañando a mexicanos
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                Miguel Ángel vivió el mismo proceso que cada cliente mexicano que
                llega a Madrid: emigrar, adaptarse a un nuevo sistema legal y
                fiscal, y construir una vida profesional en España.
              </p>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#A30D24] text-white text-sm font-semibold px-5 py-3 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Conoce al CFO de Ascente
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-4">
            {[
              {
                icon: Phone,
                titulo: "Primera llamada en clave cultural",
                desc: "Entiende los matices y expectativas del cliente mexicano desde el primer contacto — sin tecnicismos europeos.",
              },
              {
                icon: MapPin,
                titulo: "Acompañamiento punto a punto",
                desc: "Guía personalmente el proceso de llegada, instalación y consolidación del proyecto en España.",
              },
              {
                icon: Users,
                titulo: "Puente con el equipo jurídico y financiero",
                desc: "Coordina abogados, fiscalistas y finanzas para que tú solo tengas un interlocutor.",
              },
              {
                icon: Globe,
                titulo: "Continuidad a largo plazo",
                desc: "No solo tramitamos la llegada — acompañamos a la sociedad y a la familia durante años.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-200 p-5 hover:border-[#C8102E] transition-colors">
                <div className="w-10 h-10 bg-[#C8102E] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0D1B2A] text-sm mb-1">
                    {item.titulo}
                  </h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── EQUIPO NEXT ABOGADOS ───
const equipoNext = [
  {
    nombre: "Rafael Núñez Blázquez",
    cargo: "Fundador · Fiscal Internacional y Mercantil/Societario",
    bio: "Doctor H.C. Universidad de Staffordshire · ICADE E-1 · MBA Instituto de Empresa · Ex socio internacional de PwC España y KPMG LLP · Colegiado en Madrid desde 1990 · Consejero de SOCIMIs y gestora de capital riesgo.",
    foto: "/team/rafael.jpg",
  },
  {
    nombre: "Yolanda Calderón",
    cargo: "Derecho Mercantil y Societario",
    bio: "Licenciada en Derecho por la UCM (Cisneros). Especialista en constitución de sociedades, contratos mercantiles y gobierno corporativo.",
    foto: "/team/yolanda.jpg",
  },
  {
    nombre: "Carlos Martín",
    cargo: "Derecho Mercantil y Protección de Datos",
    bio: "Doble Grado Derecho-ADE ICADE-ICAI. Asesoramiento mercantil, protección de datos y cumplimiento normativo para empresas internacionales.",
    foto: "/team/carlos.jpg",
  },
  {
    nombre: "Ángel Bravo",
    cargo: "Derecho Fiscal y Procedimientos",
    bio: "Asociado Senior. UCLM · CEF · ESADE. Fiscalidad empresarial, IRPF, IS, IVA, Ley Beckham y procedimientos tributarios ante la AEAT.",
    foto: "/team/angel.jpg",
  },
  {
    nombre: "Alfonso Picón",
    cargo: "Dirección Administrativa",
    bio: "Responsable de contabilidad, compliance y administración de sociedades. Gestión integral del día a día de las empresas cliente.",
    foto: "/team/alfonso.jpg",
  },
];

function EquipoSection() {
  return (
    <section className="bg-white py-20 lg:py-28 border-t border-gray-100">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-[#C8102E] font-semibold text-sm tracking-widest uppercase mb-3">
            Next Abogados
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            El equipo jurídico detrás del servicio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Profesionales senior colegiados en Madrid. Cada cliente es atendido directamente por quienes firman — sin intermediarios.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {equipoNext.map((m, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group border border-gray-200 hover:border-[#C8102E] transition-colors overflow-hidden"
            >
              {/* Photo */}
              <div className="relative w-full overflow-hidden bg-gray-100 aspect-[4/3]">
                <img
                  src={m.foto}
                  alt={m.nombre}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {i === 0 && (
                  <div className="absolute top-3 left-3 bg-[#C8102E] text-white text-xs font-bold px-2 py-1">
                    Fundador
                  </div>
                )}
              </div>
              {/* Info */}
              <div className="p-5">
                <h3
                  className="font-bold text-[#0D1B2A] text-sm mb-1 leading-tight"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {m.nombre}
                </h3>
                <p className="text-[#C8102E] text-xs font-semibold mb-3 leading-tight">{m.cargo}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── POR QUÉ NOSOTROS ───
const diferenciales = [
  {
    icon: Star,
    titulo: "Un mexicano en el equipo",
    desc: "Miguel Ángel López, ejecutivo financiero mexicano, acompaña personalmente a cada cliente. Entiende el camino porque lo ha recorrido.",
  },
  {
    icon: Building2,
    titulo: "Visión jurídico-financiera integrada",
    desc: "Bajo un mismo techo: abogados fiscalistas, mercantilistas y equipo financiero Ascente CFO®. Sin coordinar varios proveedores.",
  },
  {
    icon: Briefcase,
    titulo: "Experiencia internacional real",
    desc: "Trayectoria en multinacionales (PwC, KPMG) y más de 20 años asesorando a clientes internacionales desde España.",
  },
  {
    icon: Shield,
    titulo: "Continuidad a largo plazo",
    desc: "No solo tramitamos la llegada. Acompañamos a la sociedad y a la familia durante años, con cuota mensual estable y previsible.",
  },
];

function DiferencialesSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C8102E] font-semibold text-sm tracking-widest uppercase mb-3">
            Por qué nosotros
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            "Acompañamos proyectos, no tramitamos expedientes"
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciales.map((d, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`border p-6 transition-colors ${
                i % 2 === 0
                  ? "border-gray-200 hover:border-[#C8102E]"
                  : "border-gray-200 hover:border-[#FCBA05]"
              }`}
            >
              <div
                className="w-10 h-10 flex items-center justify-center mb-4"
                style={{ backgroundColor: i % 2 === 0 ? "#C8102E" : "#FCBA05" }}
              >
                <d.icon className="w-5 h-5 text-white" />
              </div>
              <h3
                className="font-bold text-[#0D1B2A] text-sm mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {d.titulo}
              </h3>
              <p className="text-gray-600 text-sm">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── CTA FINAL ───
function CTASection() {
  return (
    <section className="bg-[#C8102E] py-20 lg:py-28 relative overflow-hidden">
      {/* Yellow top bar — bandera España */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FCBA05]" />
      {/* Yellow bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#FCBA05]" />
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#FCBA05] font-bold text-sm tracking-widest uppercase mb-6">
            El primer paso
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Primero cuéntanos tu situación.
            <br />
            <span className="text-[#FCBA05]">Después hablamos.</span>
          </h2>
          <p className="text-lg text-white/85 mb-10 max-w-2xl mx-auto">
            Completa el formulario en 2 minutos. Te contactamos en menos de 24 horas
            para una primera llamada sin coste donde evaluamos tu caso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={TALLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0D1B2A] hover:bg-black text-white font-semibold px-10 py-4 text-lg transition-colors"
            >
              Completar el formulario
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white hover:bg-white hover:text-[#C8102E] text-white font-semibold px-10 py-4 text-lg transition-colors"
            >
              <img src={WHATSAPP_LOGO} alt="WhatsApp" className="w-5 h-5 object-contain" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FOOTER ───
function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white/60 py-12 border-t-4 border-[#FCBA05]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p
              className="text-white font-bold text-lg mb-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span className="text-[#006847]">México</span>{" "}
              <span className="text-white/40">en</span>{" "}
              <span className="text-[#FCBA05]">España</span>
            </p>
            <p className="text-sm">Next Abogados · Ascente</p>
            <p className="text-sm mt-1">C/ Miguel Ángel 21, planta baja B</p>
            <p className="text-sm">28010 Madrid</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +34 635 580 883
                </a>
              </li>
              <li>
                <a
                  href="mailto:mlopez@ext.ascente.es"
                  className="hover:text-white transition-colors"
                >
                  mlopez@ext.ascente.es
                </a>
              </li>
              <li>
                <a
                  href="https://nextabogados.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  nextabogados.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>Asesoramiento jurídico</li>
              <li>Compliance y administración</li>
              <li>Dirección financiera externa</li>
              <li>Ley Beckham</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Next Abogados · Ascente — Madrid · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN PAGE ───
export default function MexicoHome() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PorQueEspanaSection />
      <TuCaminoSection />
      <LeyBeckhamSection />
      <ServiciosSection />
      <MiguelSection />
      <EquipoSection />
      <DiferencialesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
