import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Shield,
  Smile,
  Heart,
  Info,
  Check,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    id: "implantologia",
    title: "Implantología",
    description:
      "Soluciones permanentes y quirúrgicas de última generación para restaurar la estética y funcionalidad de tu sonrisa.",
    items: [
      "Implantes dentales unitarios y múltiples",
      "Prótesis totales fijas sobre implantes",
      "Exodoncias (extracciones)",
      "Cirugías complementarias a implantes",
      "Urgencias",
    ],
    icon: Activity,
    color: "text-blue-600",
    bg: "bg-blue-600",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop",
    imageAlt: "Implantes dentales unitarios y múltiples en clínica T-DENT",
    href: "#contact",
  },
  {
    id: "periodoncia",
    title: "Periodoncia",
    description:
      "Cuidado y tratamiento de los tejidos de soporte de los dientes para prevenir la pérdida de piezas dentales.",
    items: [
      "Tratamientos Periodontales (enfermedad de encías)",
      "Destartrajes supra gingivales y sub gingivales",
      "Pulidos radiculares",
      "Tratamientos de mantención periodontal",
    ],
    icon: Shield,
    color: "text-blue-600",
    bg: "bg-blue-600",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=400&fit=crop",
    imageAlt: "Tratamiento periodontal y destartrajes en clínica T-DENT",
    href: "#contact",
  },
  {
    id: "rehabilitacion",
    title: "Rehabilitación",
    description:
      "Restauración integral de la dentadura, combinando funcionalidad con los más altos estándares de estética.",
    items: [
      "Carillas directas e indirectas",
      "Coronas dentarias libres de metal",
      "Incrustaciones y onlays",
      "Blanqueamientos",
      "Resinas (tapaduras color diente)",
      "Prótesis removibles (placas)",
    ],
    icon: Smile,
    color: "text-blue-600",
    bg: "bg-blue-600",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop&crop=top",
    imageAlt: "Rehabilitación dental, coronas y carillas en clínica T-DENT",
    href: "#contact",
  },
  {
    id: "prevencion",
    title: "Prevención",
    description:
      "Programas preventivos orientados a educar y proteger tu salud bucodental de forma activa y constante.",
    items: [
      "Instrucción de higiene oral",
      "Sellantes",
      "Limpiezas",
      "Fluoraciones",
    ],
    icon: Heart,
    color: "text-blue-600",
    bg: "bg-blue-600",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    imageAlt: "Prevención dental, sellantes y fluoraciones en clínica T-DENT",
    href: "#contact",
  },
];

export default function ServicesGrid() {
  return (
    <section
      id="services"
      aria-label="Nuestros servicios dentales"
      className="py-20 lg:py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            {/* Section label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-4">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">
                Nuestros Servicios
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-800 leading-tight">
              Cuidado Dental Completo
              <br />
              <span className="gradient-text">Para Cada Sonrisa</span>
            </h2>
          </div>
          <Link
            href="#contact"
            id="services-view-all"
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-slate-200 text-slate-600 font-semibold rounded-xl hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 whitespace-nowrap group"
            aria-label="Agendar cita en T-DENT"
          >
            Reservar Cita
            <ChevronRight
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(
            ({
              id,
              title,
              description,
              items,
              icon: Icon,
              bg,
              image,
              imageAlt,
              href,
            }) => (
              <article
                key={id}
                className="service-card bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="service-card-image object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />

                  {/* Icon badge on image */}
                  <div className="absolute bottom-4 left-4">
                    <div
                      className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center shadow-lg`}
                      aria-hidden="true"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {description}
                  </p>

                  {/* Service list items */}
                  <ul className="space-y-2 mb-6 flex-1" role="list">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-slate-600"
                      >
                        <Check
                          className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={href}
                      id={`service-${id}-learn-more`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:gap-3 transition-all duration-200"
                      aria-label={`Solicitar información sobre ${title} en T-DENT`}
                    >
                      Solicitar Cita
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>

        {/* Footnote / Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-blue-50 border border-blue-100 rounded-3xl flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 text-white shadow-md">
            <Info className="w-6 h-6" aria-hidden="true" />
          </div>
          <div className="space-y-2">
            <h4 className="text-base font-bold text-slate-800">
              Centro de Radiología e Imagenología y Derivaciones
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Contamos con un{" "}
              <strong>centro de Radiología e Imagenología</strong> en el mismo
              edificio y una completa red de derivaciones con profesionales de
              excelencia para especialidades odontológicas complementarias a
              nuestros servicios, como por ejemplo:{" "}
              <strong>
                Endodoncia, Ortodoncia, Odontopediatría, Cirugía y Traumatología
                Máxilo Facial, Trastornos temporomandibulares y dolor orofacial
              </strong>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
