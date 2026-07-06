import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesBar from "./components/FeaturesBar";
import OurApproach from "./components/OurApproach";
import ServicesGrid from "./components/ServicesGrid";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

// Lightweight skeleton for Suspense fallbacks
function SectionSkeleton() {
  return (
    <div
      className="w-full py-20 animate-pulse bg-slate-50"
      aria-hidden="true"
    >
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        <div className="h-6 bg-slate-200 rounded-full w-32" />
        <div className="h-10 bg-slate-200 rounded-full w-64" />
        <div className="h-4 bg-slate-100 rounded-full w-80" />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Sticky navbar — client component */}
      <Navbar />

      {/* Main content */}
      <main id="main-content" tabIndex={-1}>
        {/* ① Hero — priority load, no Suspense boundary needed */}
        <Hero />

        {/* ② Features bar */}
        <Suspense fallback={<SectionSkeleton />}>
          <FeaturesBar />
        </Suspense>

        {/* ③ Our Approach */}
        <Suspense fallback={<SectionSkeleton />}>
          <OurApproach />
        </Suspense>

        {/* ④ Services Grid */}
        <Suspense fallback={<SectionSkeleton />}>
          <ServicesGrid />
        </Suspense>

        {/* ⑤ CTA Banner */}
        <Suspense fallback={<SectionSkeleton />}>
          <CTABanner />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
