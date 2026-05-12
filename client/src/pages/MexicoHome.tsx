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

const WHATSAPP_LINK =
  "https://wa.me/34635580883?text=Hola%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20instalarme%20en%20Espa%C3%B1a.";
const WHATSAPP_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/whatsapp_logo_09eed037.png";
const TALLY_LINK = "https://tally.so/r/ZjGg0z";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/miguel-ángel-lópez-sainz-0bb25341";
const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/hero_bg-hCmBTqbzuN6tTGJpJsBUWU.webp";

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
            <span className="text-[#C8102E]">México</span> en España
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
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#A30D24] text-white font-semibold px-5 py-2 text-sm transition-colors"
        >
          <img src={WHATSAPP_LOGO} alt="WhatsApp" className="w-4 h-4 object-contain" />
          Habla con nosotros
        </a>
      </div>
    </nav>
  );
}

// ─── HERO ───
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/97 to-[#0D1B2A]/75" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C8102E]" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#C8102E] font-bold text-sm tracking-widest uppercase mb-6 border-l-4 border-[#C8102E] pl-4">
            Next Abogados · Ascente — Madrid
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Tienes un proyecto en España.
            <br />
            <span className="text-[#C8102E]">Tienes a alguien que ya lo vivió.</span>
          </h1>
          <p className="text-lg text-white/70 mb-4 max-w-2xl">
            Asesoramiento jurídico, fiscal y financiero integral para mexicanos
            que quieren instalarse, emprender o invertir en España.
          </p>
          <p className="text-xl font-semibold text-[#C8102E] mb-10">
            Un mexicano en el equipo. Todo bajo un mismo techo en Madrid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#A30D24] text-white font-semibold px-10 py-4 text-lg transition-colors"
            >
              <img src={WHATSAPP_LOGO} alt="WhatsApp" className="w-5 h-5 object-contain" />
              Habla con nosotros
            </a>
            <a
              href="#tu-camino"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-10 py-4 text-lg transition-colors"
            >
              Ver el proceso
              <ArrowRight className="w-5 h-5" />
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
              className="bg-white border border-gray-200 p-8 text-center hover:border-[#C8102E] transition-colors"
            >
              <p
                className="text-4xl font-bold text-[#C8102E] mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
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
    desc: "NIE, TIE, empadronamiento, apertura de cuenta bancaria y canje de permiso de conducir.",
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
              className="flex gap-6 bg-gray-50 border border-gray-200 p-6 hover:border-[#C8102E] transition-colors"
            >
              <div className="flex-shrink-0">
                <span
                  className="text-4xl font-bold text-[#C8102E]/40"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
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
          <motion.div
            variants={fadeUp}
            className="bg-white border border-gray-200 p-8 text-center"
          >
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">
              Sin planificación
            </p>
            <p
              className="text-6xl font-bold text-gray-400 mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              54%
            </p>
            <p className="text-gray-500 text-sm">
              Régimen general IRPF — tributación sobre renta mundial con escala
              progresiva (19% a 54%)
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-[#0D1B2A] border border-[#C8102E] p-8 text-center relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-[#C8102E] text-white text-xs font-bold px-3 py-1">
              CON PLANIFICACIÓN
            </div>
            <p className="text-sm text-[#C8102E] uppercase tracking-widest mb-4">
              Con Ley Beckham
            </p>
            <p
              className="text-6xl font-bold text-[#C8102E] mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              24%
            </p>
            <p className="text-white/60 text-sm">
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
    variant: "light" as const,
    servicios: [
      "Derecho Fiscal e IRPF",
      "Fiscalidad Internacional",
      "Derecho Mercantil y Societario",
      "Constitución de sociedades",
      "Derecho Inmobiliario",
      "Convenio doble imposición MX-ES",
      "Planificación sucesoria",
      "Derecho Procesal",
    ],
  },
  {
    icon: FileText,
    titulo: "Ascente",
    subtitulo: "Compliance y administración",
    variant: "light" as const,
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
            const isRed = b.variant === "red";
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`${
                  isRed
                    ? "bg-[#C8102E]"
                    : "bg-white border border-gray-200 hover:border-[#C8102E]"
                } p-8 flex flex-col transition-colors`}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center mb-5 ${
                    isRed ? "bg-[#0D1B2A]" : "bg-[#0D1B2A]"
                  }`}
                >
                  <b.icon
                    className={`w-5 h-5 ${
                      isRed ? "text-[#C8102E]" : "text-[#C8102E]"
                    }`}
                  />
                </div>
                <h3
                  className={`font-bold text-xl mb-1 ${
                    isRed ? "text-white" : "text-[#0D1B2A]"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {b.titulo}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    isRed ? "text-white/80" : "text-[#C8102E]"
                  }`}
                >
                  {b.subtitulo}
                </p>
                <ul className="space-y-2 flex-1">
                  {b.servicios.map((s, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          isRed ? "text-white" : "text-[#006847]"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          isRed ? "text-white/85" : "text-gray-600"
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp}>
            <p className="text-[#C8102E] font-semibold text-sm tracking-widest uppercase mb-4">
              Hecho en México
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Un mexicano acompañando a mexicanos
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Miguel Ángel vivió el mismo proceso que cada cliente mexicano que
              llega a Madrid: emigrar, adaptarse a un nuevo sistema legal y
              fiscal, y construir una vida profesional en España.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Entiende los matices, miedos y expectativas del cliente mexicano
              desde el primer contacto. Traduce tus necesidades al equipo de
              abogados y fiscalistas, y viceversa.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Más de 20 años en empresas multinacionales",
                "CFO en México, Panamá, Uruguay — operaciones en más de 20 países",
                "Ex PwC · Executive Master en Finanzas — ESADE España",
                "Acompaña personalmente a clientes mexicanos desde 2025",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#006847] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C8102E] text-sm font-semibold hover:underline"
            >
              Ver perfil en LinkedIn <ArrowRight className="w-4 h-4" />
            </a>
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
              className="border border-gray-200 p-6 hover:border-[#C8102E] transition-colors"
            >
              <div className="w-10 h-10 bg-[#0D1B2A] flex items-center justify-center mb-4">
                <d.icon className="w-5 h-5 text-[#C8102E]" />
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
    <section className="bg-[#0D1B2A] py-20 lg:py-28 border-t-4 border-[#C8102E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#C8102E] font-semibold text-sm tracking-widest uppercase mb-6">
            El primer paso
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            La primera conversación es gratis.
            <br />
            <span className="text-[#C8102E]">La mala planificación, no.</span>
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Cuéntanos tu situación. En una llamada te decimos si podemos ayudarte,
            qué pasos son prioritarios y qué riesgos hay que cubrir antes de salir
            de México.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#A30D24] text-white font-semibold px-10 py-4 text-lg transition-colors"
            >
              <img src={WHATSAPP_LOGO} alt="WhatsApp" className="w-5 h-5 object-contain" />
              Escríbenos por WhatsApp
            </a>
            <a
              href={TALLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-10 py-4 text-lg transition-colors"
            >
              Cuéntanos tu situación
              <ArrowRight className="w-5 h-5" />
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
    <footer className="bg-[#0D1B2A] text-white/60 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p
              className="text-white font-bold text-lg mb-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span className="text-[#C8102E]">México</span> en España
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
      <DiferencialesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
