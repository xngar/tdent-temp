import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tdent.com"),
  title: {
    default: "T-DENT | Clínica Dental Profesional — Tu Sonrisa, Nuestra Pasión",
    template: "%s | T-DENT Clínica Dental",
  },
  description:
    "T-DENT ofrece atención dental de primer nivel: implantes, odontología cosmética, ortodoncia y más. Agenda tu cita hoy y descubre por qué más de 10,000 pacientes confían en nosotros.",
  keywords: [
    "clínica dental",
    "T-DENT",
    "dentista",
    "implantes dentales",
    "ortodoncia",
    "odontología cosmética",
    "blanqueamiento dental",
    "dentista profesional",
  ],
  authors: [{ name: "T-DENT Clínica Dental" }],
  creator: "T-DENT",
  publisher: "T-DENT",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tdent.com",
    siteName: "T-DENT Clínica Dental",
    title: "T-DENT | Clínica Dental Profesional — Tu Sonrisa, Nuestra Pasión",
    description:
      "Atención dental experta con la última tecnología. Agenda tu cita en T-DENT hoy.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "T-DENT Clínica Dental — Cuidado dental profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "T-DENT | Clínica Dental Profesional",
    description:
      "Atención dental experta con la última tecnología. Agenda tu cita en T-DENT hoy.",
    images: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=630&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "T-DENT Clínica Dental",
  description:
    "Clínica dental profesional con más de 15,000 tratamientos exitosos.",
  url: "https://tdent.com",
  telephone: "+56 9 8373 8418",
  email: "clinicadentaltdent@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Ossa 235 of 835",
    addressLocality: "La Reina",
    addressRegion: "Metropolitana",
    addressCountry: "CL",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-33.4526",
    longitude: "-70.5724",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1284",
    bestRating: "5",
  },
  priceRange: "$$",
  medicalSpecialty: "Dentistry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        {children}

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/56996793256"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-[0_4px_18px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label="Contactar por WhatsApp"
        >
          {/* Pulsing ring animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75 group-hover:animate-none" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-6 h-6 fill-current relative z-10"
            aria-hidden="true"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
