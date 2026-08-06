"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay to ensure it doesn't flash immediately on load
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShow(false);
  };

  const reject = () => {
    localStorage.setItem("cookieConsent", "false");
    setShow(false);
  };
  
  const openCookiePolicy = () => {
    window.dispatchEvent(new CustomEvent("openLegalModal", { detail: "cookies" }));
  };

  if (!isMounted || !show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md text-white p-4 sm:p-5 z-[90] shadow-2xl border-t border-slate-800 animate-in slide-in-from-bottom-full duration-500">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        <div className="text-sm text-slate-300 text-center sm:text-left leading-relaxed">
          Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación, analizar el tráfico y personalizar el contenido. Al continuar utilizando este sitio, aceptas nuestra{" "}
          <button 
            onClick={openCookiePolicy}
            className="text-blue-400 hover:text-blue-300 underline font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
          >
            Política de Cookies
          </button>.
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
          <button 
            onClick={reject} 
            className="w-full sm:w-auto bg-transparent border border-slate-700 hover:bg-slate-800 text-slate-300 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Rechazar
          </button>
          <button 
            onClick={accept} 
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
