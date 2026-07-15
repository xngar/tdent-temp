import Link from "next/link";
import { Stethoscope, ChevronRight, Phone, MessageCircle, CheckCircle, Users, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "5.000+", label: "Pacientes satisfechos" },
  { icon: CheckCircle, value: "15K+", label: "Casos exitosos" },
  { icon: Star, value: "Desde 2013", label: "Años de experiencia" },
];

export default function CTABanner() {
  return (
    <section
      aria-label="Llamada a la acción — Agenda tu cita en T-DENT"
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 px-8 py-16 lg:px-20 lg:py-20">
          {/* Decorative circles */}
          <div
            className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-12 w-80 h-80 bg-white/5 rounded-full"
            aria-hidden="true"
          />
          <div
            className="absolute top-8 right-32 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-12 right-8 w-20 h-20 bg-white/5 rounded-full blur-xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Icon + text */}
            <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left max-w-2xl">
              {/* Icon badge */}
              <div className="w-16 h-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/20">
                <Stethoscope className="w-8 h-8 text-white" aria-hidden="true" />
              </div>

              {/* Heading */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
                  ¿Listo para lucir una sonrisa{" "}
                  <span className="text-blue-200">más sana y radiante?</span>
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  En <span className="font-bold text-white">T-DENT</span> te atendemos con tecnología de vanguardia
                  en un ambiente cálido y sin dolor. Agenda hoy en nuestra clínica
                  de <span className="font-semibold text-white">Plaza Egaña, La Reina</span>.
                </p>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-2">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center border border-white/20">
                      <Icon className="w-4 h-4 text-blue-200" aria-hidden="true" />
                    </div>
                    <div className="text-left">
                      <p className="text-white font-black text-sm leading-none">{value}</p>
                      <p className="text-blue-200 text-xs mt-0.5">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex-shrink-0 flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto lg:w-auto">
              {/* Primary — Agenda tu cita */}
              <Link
                href="#contact"
                id="cta-banner-book"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all duration-200 hover:-translate-y-1 group"
                aria-label="Agendar tu cita en T-DENT"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Agenda tu cita
                <ChevronRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </Link>

              {/* Secondary — WhatsApp */}
              <Link
                href="https://wa.me/56996793256?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20en%20T-DENT"
                id="cta-banner-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold text-lg rounded-2xl hover:bg-white/20 transition-all duration-200 hover:-translate-y-1 backdrop-blur-sm"
                aria-label="Contactar T-DENT por WhatsApp"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Escríbenos por WhatsApp
              </Link>

              {/* Phone hint */}
              <p className="text-blue-200 text-sm text-center lg:text-center">
                O llámanos al{" "}
                <Link
                  href="tel:+56996793256"
                  className="text-white font-bold hover:text-blue-200 transition-colors duration-200"
                  aria-label="Llamar a T-DENT"
                >
                  +56 9 9679 3256
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
