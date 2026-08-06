"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

type PolicyType = "privacy" | "terms" | "cookies" | null;

export default function LegalModals() {
  const [activeModal, setActiveModal] = useState<PolicyType>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModal(null);
    };
    window.addEventListener("keydown", handleEsc);
    
    // Listen for custom event from Cookie Consent banner
    const handleCustomEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && ["privacy", "terms", "cookies"].includes(customEvent.detail)) {
        setActiveModal(customEvent.detail as PolicyType);
      }
    };
    window.addEventListener("openLegalModal", handleCustomEvent);
    
    return () => {
      window.removeEventListener("keydown", handleEsc);
      window.removeEventListener("openLegalModal", handleCustomEvent);
    };
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeModal]);

  const renderContent = () => {
    switch (activeModal) {
      case "privacy":
        return (
          <div className="space-y-4 text-slate-700 text-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">1. Política de Privacidad</h2>
            <p className="text-slate-500 italic mb-4">Última actualización: Agosto 2026</p>
            <p>
              En Clínica Tdent (clinicatdent.cl), la privacidad y el resguardo de la información de nuestros pacientes y usuarios es una prioridad. La presente Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos tus datos personales conforme a la Ley N° 21.719 (que modifica la Ley N° 19.628) y la Ley N° 20.584 sobre Derechos y Deberes de las Personas en Salud en Chile.
            </p>
            
            <h3 className="text-lg font-semibold text-slate-900 mt-6">1.2. Datos que Recopilamos</h3>
            <p>Podemos recopilar los siguientes datos a través de los formularios del sitio web, reservas de citas online o comunicación directa:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Datos Identificatorios:</strong> Nombre completo, RUT, fecha de nacimiento.</li>
              <li><strong>Datos de Contacto:</strong> Correo electrónico, teléfono, dirección.</li>
              <li><strong>Datos Sensibles (Salud):</strong> Motivo de consulta dental, antecedentes médicos previos consignados voluntariamente al solicitar hora. (Tratados bajo estricto secreto profesional y reserva legal según la Ley N° 20.584).</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-900 mt-6">1.3. Finalidad del Tratamiento</h3>
            <p>Los datos personales recopilados se utilizarán exclusivamente para:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Gestionar y agendar citas odontológicas.</li>
              <li>Contactar al paciente para recordatorios, confirmaciones o reprogramación de horas.</li>
              <li>Conformar la ficha clínica según la normativa del Ministerio de Salud de Chile.</li>
              <li>Emitir boletas, facturas y gestionar pagos.</li>
              <li>Responder a consultas o requerimientos enviados desde el sitio web.</li>
              <li>(Opcional con consentimiento explícito) Enviar promociones, boletines o información sobre tratamientos.</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-900 mt-6">1.4. Datos de Salud y Confidencialidad</h3>
            <p>
              Los datos de salud tienen el carácter de datos sensibles. En virtud de la Ley N° 20.584, la información médica y odontológica contenida en la ficha clínica es de carácter reservado. Solo tendrán acceso a ella el profesional tratante, el equipo de salud autorizado y las personas legitimadas por la ley.
            </p>

            <h3 className="text-lg font-semibold text-slate-900 mt-6">1.5. Derechos de los Usuarios (Derechos ARCOP)</h3>
            <p>En cumplimiento de la Ley N° 21.719, como titular de los datos tienes derecho a ejercer tus derechos de:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Acceso:</strong> Conocer qué datos personales tenemos almacenados sobre ti.</li>
              <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
              <li><strong>Cancelación / Supresión:</strong> Solicitar la eliminación de tus datos cuando ya no sean necesarios para los fines estipulados (salvo obligación legal de conservación de ficha clínica).</li>
              <li><strong>Oposición:</strong> Oponerte al uso de tus datos para fines específicos (ej. marketing).</li>
              <li><strong>Portabilidad:</strong> Solicitar una copia de tus datos personales en un formato estructurado y de uso común.</li>
            </ul>
            <p className="mt-4 bg-blue-50 p-3 rounded-lg text-blue-800">
              Para ejercer cualquiera de estos derechos, envía un correo electrónico a <strong>clinicadentaltdent@gmail.com</strong> adjuntando una copia de tu cédula de identidad para verificar la titularidad.
            </p>

            <h3 className="text-lg font-semibold text-slate-900 mt-6">1.6. Seguridad de la Información</h3>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger tus datos contra el acceso no autorizado, alteración, pérdida o destrucción.
            </p>
          </div>
        );
      case "terms":
        return (
          <div className="space-y-4 text-slate-700 text-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">2. Términos y Condiciones de Servicio</h2>
            <p>Bienvenido a clinicatdent.cl. Al acceder y navegar en nuestro sitio web o utilizar nuestros servicios de reserva en línea, aceptas cumplir con los siguientes Términos de Servicio.</p>

            <h3 className="text-lg font-semibold text-slate-900 mt-6">2.1. Información General</h3>
            <p>El sitio web clinicatdent.cl tiene por objeto proporcionar información sobre los tratamientos odontológicos ofrecidos por Clínica T-DENT, así como facilitar el agendamiento de horas clínicas.</p>

            <h3 className="text-lg font-semibold text-slate-900 mt-6">2.2. Uso del Sitio Web y Responsabilidad del Usuario</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>El usuario se compromete a hacer un uso adecuado y lícito del sitio web.</li>
              <li>Al ingresar datos para el agendamiento de citas, el usuario garantiza que la información entregada es veraz, exacta y actualizada.</li>
              <li>El sitio web no reemplaza el diagnóstico ni la evaluación clínica presencial realizada por un cirujano dentista habilitado en Chile.</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-900 mt-6">2.3. Reservas, Cancelaciones y Confirmación de Citas</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Las solicitudes de hora realizadas a través del sitio web están sujetas a confirmación por parte de nuestro equipo.</li>
              <li>Si requieres cancelar o reprogramar una cita, te solicitamos dar aviso con un mínimo de <strong>24 horas</strong> de anticipación mediante nuestros canales de contacto.</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-900 mt-6">2.4. Propiedad Intelectual</h3>
            <p>Todos los contenidos presentados en este sitio (textos, logotipos, imágenes, diseño gráfico y código fuente) son propiedad exclusiva de Clínica T-DENT o cuentan con la debida autorización para su uso, quedando prohibida su reproducción o distribución sin autorización previa por escrito.</p>

            <h3 className="text-lg font-semibold text-slate-900 mt-6">2.5. Limitación de Responsabilidad</h3>
            <p>Clínica T-DENT no se responsabiliza por interrupciones temporales del servicio del sitio web derivadas de fallas de conexión a Internet, mantenimiento técnico o causas de fuerza mayor.</p>

            <h3 className="text-lg font-semibold text-slate-900 mt-6">2.6. Legislación Aplicable y Jurisdicción</h3>
            <p>Estos Términos de Servicio se rigen por las leyes de la República de Chile. Cualquier controversia será sometida a los tribunales ordinarios de justicia correspondientes al domicilio de la clínica.</p>
          </div>
        );
      case "cookies":
        return (
          <div className="space-y-4 text-slate-700 text-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">3. Política de Cookies</h2>
            <p className="text-slate-500 italic mb-4">Última actualización: Agosto 2026</p>
            <p>En clinicatdent.cl utilizamos cookies y tecnologías similares para mejorar la experiencia de navegación del usuario, analizar el tráfico web y optimizar la gestión de citas.</p>

            <h3 className="text-lg font-semibold text-slate-900 mt-6">3.1. ¿Qué son las Cookies?</h3>
            <p>Una cookie es un pequeño archivo de texto que un sitio web guarda en tu ordenador o dispositivo móvil cuando lo visitas, permitiendo recordar tus acciones y preferencias durante un tiempo.</p>

            <h3 className="text-lg font-semibold text-slate-900 mt-6">3.2. Tipos de Cookies que Utilizamos</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Cookies Necesarias:</strong> Indispensables para el funcionamiento básico del sitio web (ej. navegación segura, uso del sistema de agendamiento).</li>
              <li><strong>Cookies de Rendimiento y Analítica:</strong> Nos permiten cuantificar el número de visitantes y analizar cómo interactúan con la web (ej. mediante Google Analytics), para mejorar la experiencia de usuario.</li>
              <li><strong>Cookies Funcionales:</strong> Permiten al sitio recordar opciones seleccionadas por el usuario (como el idioma o la región).</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-900 mt-6">3.3. Control y Desactivación de Cookies</h3>
            <p>Puedes restringir, bloquear o borrar las cookies de este sitio web en cualquier momento modificando la configuración de tu navegador:</p>
            <ul className="list-disc pl-5 space-y-2 bg-slate-50 p-4 rounded-lg mt-2">
              <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies.</li>
              <li><strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies y datos del sitio.</li>
              <li><strong>Safari:</strong> Preferencias &gt; Privacidad.</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
        <button 
          onClick={() => setActiveModal("privacy")} 
          className="text-xs text-white hover:text-slate-300 transition-colors duration-200"
        >
          Políticas de Privacidad
        </button>
        <button 
          onClick={() => setActiveModal("terms")} 
          className="text-xs text-white hover:text-slate-300 transition-colors duration-200"
        >
          Términos de Servicio
        </button>
        <button 
          onClick={() => setActiveModal("cookies")} 
          className="text-xs text-white hover:text-slate-300 transition-colors duration-200"
        >
          Políticas de Cookies
        </button>
      </div>

      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-100 bg-white sticky top-0 z-10">
              <div className="flex-1" />
              <button
                onClick={() => setActiveModal(null)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-4 sm:p-6 overflow-y-auto">
              {renderContent()}
            </div>
            
            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
