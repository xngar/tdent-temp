import Image from "next/image";
import Link from "next/link";
import { Stethoscope, ChevronRight } from "lucide-react";

const heroImage = "/foto-interior.clinica.webp";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 pb-0 overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={heroImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "calc(50% + 350px) center" }}
          priority
          fetchPriority="high"
          quality={85}
        />
      </div>

      {/* Left-to-right white gradient overlay — keeps text readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, white 30%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.3) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-[calc(100vh-80px)] py-12">
          {/* Left — Text content (max ~55% width) */}
          <div className="space-y-8 max-w-xl">
            {/* Main heading */}
            <h1 className="font-black tracking-tight leading-tight">
              <span className="block text-4xl sm:text-5xl lg:text-6xl text-slate-800">
                Odontología de{" "}
                <span className="gradient-text">alta calidad</span>
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-slate-500 font-extrabold mt-1">
                Tu sonrisa, nuestra prioridad
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-md leading-relaxed">
              Brindamos{" "}
              <span className="font-semibold text-slate-800">
                atención personalizada
              </span>{" "}
              y{" "}
              <span className="gradient-text">tecnología de vanguardia</span>{" "}
              en{" "}
              <strong className="text-slate-700">Plaza Egaña, La Reina</strong>.
              A pasos del metro, con rápido acceso desde Ñuñoa, Peñalolén y
              Providencia.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                id="hero-book-appointment"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-principal)] text-white font-semibold rounded-2xl shadow-lg"
                aria-label="Agenda tu consulta en T-DENT"
              >
                Agenda tu consulta
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>

            {/* Floating info badge */}
            <div className="inline-flex">
              <div className="glass-card rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Stethoscope
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Tus dientes son únicos
                    </p>
                    <p className="text-xs text-slate-500 leading-snug">
                      Te ayudaremos a mantenerlos el mayor tiempo posible
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 36C840 40 960 48 1080 52C1200 56 1320 56 1380 56L1440 56V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
