import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const checkItems = [
  "Instalaciones de primer nivel autorizadas por la Seremi de Salud",
  "Especialistas en Implantología y Periodoncia de la Universidad de Chile",
  "Ubicada en Plaza Egaña (Límite La Reina / Ñuñoa), acceso Metro L3 y L4",
  "Métodos de pago con transferencia, efectivo, cheque o tarjetas",
  "Planes de pago de 3 a 12 cuotas sin interés pagando con tarjeta de crédito",
];

export default function OurApproach() {
  return (
    <section
      id="about"
      aria-label="Sobre nosotros — Clínica Dental T-DENT"
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text content */}
          <ScrollReveal direction="right" duration={900} distance="60px" className="order-2 lg:order-1">
            <div className="space-y-8">
              {/* Section label */}
              {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">
                  Sobre Nosotros
                </span>
              </div> */}

              <h2 className="text-4xl lg:text-5xl font-black text-slate-800 leading-tight">
                Odontología de Calidad{" "}
                <span className="gradient-text">Desde 2013</span>
              </h2>

              <div className="space-y-4 text-slate-500 leading-relaxed max-w-lg">
                <p>
                  Fundada en 2013 por el <strong>Dr. Hernán Toro Alvear</strong>{" "}
                  (especialista en Implantología Oral, Universidad de Chile) y el <strong>Dr. Hernán Toro Castillo</strong> (especialista en Periodoncia, Universidad de Chile), T-DENT
                  nació en Santiago Centro y hoy atiende en su moderno consultorio
                  de <strong>Plaza Egaña</strong>, en el límite de las comunas de <strong>La Reina</strong> y <strong>Ñuñoa</strong>.
                </p>
                <p>
                  Combinamos altos estándares de calidad e instalaciones autorizadas sanitariamente
                  para entregar tratamientos seguros — tanto preventivos como correctivos — 
                  para toda la familia. Atendemos pacientes de <strong>La Reina, Ñuñoa, Peñalolén, Macul</strong> y toda la zona oriente de Santiago.
                </p>
              </div>

              {/* Check list */}
              <ul className="space-y-4" role="list">
                {checkItems.map((item) => (
                  <li key={item} className="check-item flex items-start gap-3">
                    <CheckCircle2
                      className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Right — Image + floating stat */}
          <ScrollReveal direction="left" duration={900} distance="60px" className="relative order-1 lg:order-2">
            <div>
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <Image
                  src="/scan.webp"
                  alt="Consultorio dental moderno de T-DENT en Edificio Egaña Oficinas, Plaza Egaña La Reina"
                  width={640}
                  height={560}
                  className="w-full h-auto object-cover"
                  quality={85}
                  loading="lazy"
                />
                {/* Blue gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />
              </div>

              {/* Floating stat card */}
              <div className="absolute bottom-6 left-6 lg:-left-8">
                <ScrollReveal direction="up" delay={300} duration={800} distance="25px">
                  <div className="glass-card rounded-2xl p-5 shadow-xl animate-float">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                        <Award className="w-6 h-6 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-2xl font-black text-slate-800">
                          10+ Años
                        </p>
                        <p className="text-sm text-slate-500 font-medium">
                          De Experiencia y Confianza
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Decorative element */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-60"
                aria-hidden="true"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
