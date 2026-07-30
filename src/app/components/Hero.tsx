import Image from "next/image";
import Link from "next/link";
import { Stethoscope, Clock, CheckCircle, ChevronRight } from "lucide-react";

// Patient avatar data
const avatars = [
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    alt: "Paciente satisfecha María García",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    alt: "Paciente satisfecho Carlos Ruiz",
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    alt: "Paciente satisfecha Ana López",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    alt: "Paciente satisfecho David Torres",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 pb-0 overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 hero-gradient" aria-hidden="true" />

      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-12 lg:py-0">
          {/* Left — Text content */}
          <div className="space-y-8">
            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-200 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-700 text-sm font-semibold">
                #1 Clínica Dental de Confianza
              </span>
            </div> */}

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
            <p className="text-lg sm:text-xl text-slate-500 max-w-md leading-relaxed">
              Brindamos{" "}
              <span className="font-semibold text-slate-800">
                atención personalizada
              </span>{" "}
              y<span className="gradient-text"> tecnología de vanguardia</span>{" "}
              en un entorno moderno, tranquilo y accesible.
            </p>

            {/* Short description */}
            {/* <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
              Atención dental experta y personalizada para una sonrisa segura,
              cómoda y duradera.
            </p> */}

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                id="hero-book-appointment"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl shadow-lg"
                aria-label="Agenda tu consulta en T-DENT"
              >
                Agenda tu consulta
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="#about"
                id="hero-our-services"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/80 border border-slate-200 text-slate-700 font-semibold rounded-2xl hover:bg-white hover:shadow-md transition-all duration-200"
                aria-label="Conoce nuestra historia"
              >
                Conoce nuestra historia
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>

            {/* Trusted patients */}
            <div className="flex items-center gap-4">
              {/* Avatars */}
              <div
                className="flex -space-x-3"
                aria-label="Avatares de pacientes satisfechos"
              >
                {avatars.map((avatar, i) => (
                  <div
                    key={i}
                    className="relative w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden"
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-600">
                  <span className="font-bold text-slate-800">
                    Confiados por mas de 5.000 mil
                  </span>{" "}
                  Pacientes satisfechos ❤️
                </p>
              </div>
            </div>
          </div>

          {/* Right — Image + floating cards */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main hero image */}
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(37,99,235,0.2)]">
                <Image
                  src="/foto-interior-clinica.png"
                  alt="Paciente feliz con sonrisa sana en T-DENT"
                  width={560}
                  height={760}
                  className="w-full h-[520px] sm:h-[620px] lg:h-[630px] object-cover object-center"
                  priority
                  quality={90}
                />
                {/* Blue tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />
              </div>

              {/* Floating card — Tratamiento sin dolor */}
              <div className="animate-float absolute top-6 -right-4 lg:-right-12">
                <div className="glass-card rounded-2xl p-4 shadow-xl min-w-[180px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Stethoscope
                        className="w-5 h-5 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        Tratamiento
                      </p>
                      <p className="text-sm font-bold text-slate-800">
                        sin dolor
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-snug">
                    Tecnología moderna para cuidados cómodos y eficientes
                  </p>
                </div>
              </div>

              {/* Floating card — Abierto hoy */}
              <div className="animate-float-delay absolute bottom-8 -right-4 lg:-right-12">
                <div className="glass-card rounded-2xl p-4 shadow-xl min-w-[180px]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center animate-pulse-ring">
                      <Clock
                        className="w-4 h-4 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500">
                        Abierto hoy
                      </p>
                      <p className="text-sm font-bold text-slate-800">
                        9:00 – 20:00
                      </p>
                    </div>
                    <ChevronRight
                      className="w-5 h-5 text-blue-500 ml-auto"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-4 -left-4 lg:-left-8">
                <div className="glass-card rounded-2xl p-3.5 shadow-xl">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle
                      className="w-8 h-8 text-blue-600"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-bold text-slate-800">15K+</p>
                      <p className="text-xs text-slate-500">Casos exitosos</p>
                    </div>
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
