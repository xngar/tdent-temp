import Image from "next/image";
import Link from "next/link";
import { Stethoscope, Sparkles, Zap, Smile, ChevronRight } from "lucide-react";

const services = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    description:
      "Routine check-ups, cleanings, and preventive care for a healthy smile.",
    icon: Stethoscope,
    color: "text-blue-600",
    bg: "bg-blue-600",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=400&fit=crop",
    imageAlt: "Tratamiento de odontología general — revisión y limpieza dental",
    href: "#services",
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    description:
      "Enhance your smile with whitening, veneers, bonding & more.",
    icon: Sparkles,
    color: "text-blue-600",
    bg: "bg-blue-600",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop&crop=top",
    imageAlt:
      "Odontología cosmética — blanqueamiento dental y veneers en T-DENT",
    href: "#services",
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    description:
      "Permanent solutions for missing teeth that look and feel natural.",
    icon: Zap,
    color: "text-blue-600",
    bg: "bg-blue-600",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop",
    imageAlt: "Implantes dentales permanentes en clínica T-DENT",
    href: "#services",
  },
  {
    id: "kids-dentistry",
    title: "Kids Dentistry",
    description:
      "Specialized care for kids in a friendly and comfortable environment.",
    icon: Smile,
    color: "text-blue-600",
    bg: "bg-blue-600",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    imageAlt: "Odontopediatría — dentista para niños en T-DENT",
    href: "#services",
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
                Our Services
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-800 leading-tight">
              Complete Dental Care
              <br />
              <span className="gradient-text">For Every Smile</span>
            </h2>
          </div>
          <Link
            href="#contact"
            id="services-view-all"
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-slate-200 text-slate-600 font-semibold rounded-xl hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 whitespace-nowrap group"
            aria-label="Ver todos los servicios de T-DENT"
          >
            View All Services
            <ChevronRight
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(
            ({ id, title, description, icon: Icon, bg, image, imageAlt, href }) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

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
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">
                    {description}
                  </p>
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <Link
                      href={href}
                      id={`service-${id}-learn-more`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:gap-3 transition-all duration-200"
                      aria-label={`Más información sobre ${title} en T-DENT`}
                    >
                      Learn More
                      <ChevronRight
                        className="w-4 h-4"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
