import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Share2,
  Rss,
  MessageCircle,
} from "lucide-react";

const footerLinks = {
  Servicios: [
    { label: "Implantología", href: "#services" },
    { label: "Periodoncia", href: "#services" },
    { label: "Rehabilitación", href: "#services" },
    { label: "Prevención", href: "#services" },
    { label: "Radiología", href: "#services" },
    { label: "Urgencias", href: "#services" },
  ],
  Clínica: [
    { label: "Sobre Nosotros", href: "#about" },
    { label: "Especialistas", href: "#about" },
    { label: "Historia T-DENT", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ],
  Recursos: [
    { label: "Facilidades de Pago", href: "#about" },
    { label: "Educación y Consejos", href: "#about" },
    { label: "Urgencias Dentales", href: "#services" },
    { label: "Preguntas Frecuentes", href: "#" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#", label: "Sitio web de T-DENT" },
  { icon: Share2, href: "#", label: "Compartir T-DENT" },
  { icon: Rss, href: "#", label: "RSS de T-DENT" },
  { icon: MessageCircle, href: "#", label: "Mensajes T-DENT" },
];

const contactInfo = [
  {
    icon: Phone,
    text: "+56 9 8373 8418",
    label: "Teléfono de T-DENT",
    href: "tel:+56983738418",
  },
  {
    icon: Mail,
    text: "clinicadentaltdent@gmail.com",
    label: "Email de T-DENT",
    href: "mailto:clinicadentaltdent@gmail.com",
  },
  {
    icon: MapPin,
    text: "Av. Ossa 235 of 835, La Reina, Chile",
    label: "Dirección de T-DENT",
    href: "https://maps.google.com/?q=Av.+Ossa+235+of+835,+la+reina,+Chile",
  },
];

const hours = [
  { day: "Lunes – Viernes", time: "9:00 AM – 8:00 PM" },
  { day: "Sábado", time: "9:00 AM – 2:00 PM" },
  { day: "Domingo", time: "Cerrado" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[var(--color-principal)] text-white"
      role="contentinfo"
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center group"
              aria-label="T-DENT — Ir al inicio"
            >
              <Image
                src="/logo_tdent_blanco.webp"
                alt="T-DENT Clínica Dental"
                width={140}
                height={48}
                className=""
              />
            </Link>

            <p className="text-white text-sm leading-relaxed max-w-xs">
              Atención odontológica personalizada y de calidad desde 2013.
              Ubicados en Plaza Egaña con instalaciones autorizadas por la
              Seremi de Salud.
            </p>

            {/* Social links */}
            {/* <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </Link>
              ))}
            </div> */}

            {/* Contact info */}
            <address className="not-italic space-y-3">
              {contactInfo.map(({ icon: Icon, text, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-start gap-3 text-sm text-white hover:text-blue-400 transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg[var(--color-secundario)] group-hover:bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200">
                    <Icon
                      className="w-4 h-4 flex-shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="leading-relaxed">{text}</span>
                </Link>
              ))}
            </address>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <nav
              key={category}
              className="lg:col-span-1"
              aria-label={`Navegación — ${category}`}
            >
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
                {category}
              </h3>
              <ul className="space-y-3" role="list">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-white hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block transition-transform"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Horarios column */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
              Horarios
            </h3>
            {/* <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-blue-500" aria-hidden="true" />
              <span className="text-xs text-emerald-400 font-semibold">
                Abierto Hoy
              </span>
            </div> */}
            <ul className="space-y-3" role="list">
              {hours.map(({ day, time }) => (
                <li key={day} className="text-sm">
                  <span className="text-white">{day}</span>
                  <br />
                  <span className="text-white font-medium">{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white text-center sm:text-left">
            © {new Date().getFullYear()} T-DENT Clínica Dental. Todos los
            derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-white hover:text-slate-300 transition-colors duration-200"
            >
              Políticas de Privacidad
            </Link>
            <Link
              href="#"
              className="text-xs text-white hover:text-slate-300 transition-colors duration-200"
            >
              Términos de Servicio
            </Link>
            <Link
              href="#"
              className="text-xs text-white hover:text-slate-300 transition-colors duration-200"
            >
              Políticas de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
