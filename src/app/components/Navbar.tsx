"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Stethoscope } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#team", label: "Our Team" },
  { href: "#resources", label: "Resources" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-white/80 backdrop-blur-sm"
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Navegación principal"
        >
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="T-DENT — Ir al inicio"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/40 transition-shadow duration-300">
                <Stethoscope className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold text-blue-600 tracking-tight">
                  T-DENT
                </span>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
                  Dental Clinic
                </span>
              </div>
            </Link>

            {/* Desktop navigation */}
            <ul
              className="hidden lg:flex items-center gap-1"
              role="list"
            >
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setActiveSection(href.slice(1))}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeSection === href.slice(1)
                        ? "text-blue-600 bg-blue-50"
                        : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="#contact"
                id="nav-book-appointment"
                className="btn-primary px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-blue-500/40 transition-all duration-200 flex items-center gap-2"
                aria-label="Reservar una cita dental"
              >
                Book Appointment
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-all duration-200"
              aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              {isMobileOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isMobileOpen}
        >
          <div className="bg-white border-t border-slate-100 px-4 py-4 shadow-lg">
            <ul className="space-y-1" role="list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMobileMenu}
                    className="flex items-center px-4 py-3 text-base font-medium text-slate-700 rounded-xl hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <Link
                href="#contact"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-md"
                aria-label="Reservar una cita dental"
              >
                Book Appointment
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
