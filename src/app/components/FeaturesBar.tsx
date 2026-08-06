import { Shield, Zap, Smile, CalendarCheck } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Especialistas de Excelencia",
    description: "Dr. Hernán Toro Alvear y Dr. Hernán Toro Castillo",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Zap,
    title: "Tecnología Avanzada",
    description: "Equipos odontológicos de vanguardia",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: Smile,
    title: "Seremi de Salud",
    description: "Instalaciones certificadas y autorizadas",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: CalendarCheck,
    title: "Facilidades de Pago",
    description:
      "De 3 a 12 cuotas sin interés (*según el costo de tu tratamiento)",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export default function FeaturesBar() {
  return (
    <section
      aria-label="Características principales de T-DENT"
      className="relative bg-white py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-slate-100 px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map(
              ({ icon: Icon, title, description, color, bg }, i) => (
                <article
                  key={title}
                  className="feature-card flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 cursor-default"
                >
                  {/* Divider (except first) */}
                  {i > 0 && (
                    <div
                      className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-slate-200"
                      aria-hidden="true"
                    />
                  )}

                  <div
                    className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center flex-shrink-0`}
                    aria-hidden="true"
                  >
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-800 mb-1">
                      {title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
