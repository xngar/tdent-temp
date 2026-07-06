import Link from "next/link";
import { Stethoscope, ChevronRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section
      aria-label="Llamada a la acción — Agenda tu cita en T-DENT"
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-600 to-blue-800 px-8 py-16 lg:px-20 lg:py-20">
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

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Icon + text */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 text-center sm:text-left lg:text-left">
              <div className="w-16 h-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/20">
                <Stethoscope className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-3">
                  Ready for a healthier,
                  <br className="hidden sm:block" /> brighter smile?
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed max-w-lg">
                  Book your appointment today and experience the T-DENT
                  difference. Your perfect smile is just one click away.
                </p>
              </div>
            </div>

            {/* CTA button */}
            <div className="flex-shrink-0">
              <Link
                href="#contact"
                id="cta-banner-book"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all duration-200 hover:-translate-y-1 group"
                aria-label="Reservar tu cita en T-DENT ahora"
              >
                Book Appointment
                <ChevronRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
