"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El formato de correo no es válido.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es obligatorio.";
    } else if (!/^\+?[\d\s-]{8,15}$/.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "El formato de teléfono no es válido.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the current field if any
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate sending email/form message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section
      id="contact"
      aria-label="Contacto T-DENT"
      className="py-20 lg:py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Ponte en Contacto
          </h2>
          <p className="text-slate-500 text-lg mt-4 leading-relaxed">
            ¿Tienes dudas o deseas agendar? Envíanos tus consultas y te responderemos a la brevedad.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Card 1: Address (Primary Blue Accent) */}
          <div className="bg-blue-600 text-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/10">
              <MapPin className="w-7 h-7 text-white" aria-hidden="true" />
            </div>
            <h3 className="font-extrabold text-xl mb-3">Dirección</h3>
            <p className="text-blue-100 text-sm leading-relaxed font-medium">
              Av. Ossa 235 of 835,
              <br />
              La Reina, Santiago, Chile
            </p>
          </div>

          {/* Card 2: Contact (Light Card) */}
          <a
            href="tel:+56996793256"
            className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md group"
          >
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="font-extrabold text-xl text-slate-900 mb-3">Contacto</h3>
            <p className="text-blue-600 font-bold text-base transition-colors group-hover:text-blue-700">
              +56 9 9679 3256
            </p>
          </a>

          {/* Card 3: Email (Light Card) */}
          <a
            href="mailto:drtoroalvear@gmail.com"
            className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md group"
          >
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="font-extrabold text-xl text-slate-900 mb-3">Email</h3>
            <p className="text-blue-600 font-bold text-base transition-colors group-hover:text-blue-700 break-all">
              drtoroalvear@gmail.com
            </p>
          </a>
        </div>

        {/* Map + Form Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Google Map Embed */}
          <div className="relative w-full rounded-3xl overflow-hidden shadow-md border border-slate-100 min-h-[350px] lg:min-h-full bg-slate-100">
            <iframe
              src="https://maps.google.com/maps?q=Av.%20Ossa%20235%20of%20835,%20La%20Reina,%20Santiago,%20Chile&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de T-DENT en Google Maps"
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Right Column: Form Box */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center py-10 animate-fade-up">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-slate-500 max-w-sm mx-auto mb-8 text-sm">
                  Gracias por escribirnos. Nuestro equipo se pondrá en contacto contigo a la brevedad.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-xl transition-colors duration-200"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Nombre Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Su nombre"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-blue-600"
                    } focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white text-slate-950 placeholder-slate-400 text-sm`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Correo Electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@correo.com"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.email ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-blue-600"
                    } focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white text-slate-950 placeholder-slate-400 text-sm`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Teléfono Celular <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+56 9 9679 3256"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.phone ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-blue-600"
                    } focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white text-slate-950 placeholder-slate-400 text-sm`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Mensaje / Descripción <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-blue-600"
                    } focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white text-slate-950 placeholder-slate-400 text-sm h-32 resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:bg-blue-400 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <Send className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
