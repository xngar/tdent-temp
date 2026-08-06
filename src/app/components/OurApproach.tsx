import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, ChevronRight } from "lucide-react";

const checkItems = [
  "Instalaciones de primer nivel autorizadas por la Seremi de Salud",
  "Atención personalizada guiada por el Dr. Hernán Toro Alvear (Periodoncista)",
  "Ubicada en Plaza Egaña (La Reina / Ñuñoa), en Edificio Egaña Oficinas",
  "Métodos de pago con transferencia, efectivo, cheque o tarjetas",
  "Planes de pago según el costo de tu tratamiento, con 3 a 12 cuotas sin interés pagando con tarjeta de crédito o débito",
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
          <div className="space-y-8 order-2 lg:order-1">
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
                (especialista en Implantología Oral de la U. de Chile), T-DENT
                nació en Santiago Centro y hoy atiende en su moderno consultorio
                de <strong>Plaza Egaña</strong>.
              </p>
              <p>
                Combinamos altos estándares de calidad, un entorno tranquilo y
                accesible, e instalaciones autorizadas sanitariamente para
                entregar tratamientos seguros tanto preventivos como correctivos
                para toda la familia.
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

            {/* CTA */}
            {/* <Link
              href="#contact"
              id="approach-learn-more"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 font-semibold rounded-2xl hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 group"
              aria-label="Reservar una hora de atención en T-DENT"
            >
              Reservar Cita
              <ChevronRight
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                aria-hidden="true"
              />
            </Link> */}
          </div>

          {/* Right — Image + floating stat */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=700&fit=crop"
                alt="Consultorio dental moderno de T-DENT en Edificio Egaña Oficinas"
                width={640}
                height={560}
                className="w-full h-auto object-cover"
                quality={85}
              />
              {/* Blue gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute bottom-6 left-6 lg:-left-8">
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
            </div>

            {/* Decorative element */}
            <div
              className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-60"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
