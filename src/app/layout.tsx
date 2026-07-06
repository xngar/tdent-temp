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
  telephone: "+34-900-000-000",
  email: "info@tdent.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Principal 123",
    addressLocality: "Madrid",
    postalCode: "28001",
    addressCountry: "ES",
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
    latitude: "40.4168",
    longitude: "-3.7038",
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
      </body>
    </html>
  );
}
