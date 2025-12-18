import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const FormGeneral = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Configuración de EmailJS
    const SERVICE_ID = 'service_xja9k0e';
    const TEMPLATE_ID = 'template_vtxpk9m';
    const PUBLIC_KEY = 'Ti4-S06KAacT1w-Vq';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        console.log('Email enviado:', result.text);
        setSubmitMessage('¡Mensaje enviado con éxito! Te contactaremos pronto.');
        formRef.current.reset();
        setIsSubmitting(false);
      }, (error) => {
        console.log('Error al enviar:', error.text);
        setSubmitMessage('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-gray-50 rounded-2xl p-8 shadow-xl border-2 border-gray-100">
      <div className="text-center mb-8">
        <p className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-3">— Contáctanos</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">¿Tienes Preguntas?</h2>
        <p className="text-gray-600 leading-relaxed">
          Siéntete libre de contactarnos para cualquier consulta.
        </p>
      </div>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          name="from_name"
          placeholder="Nombre completo*" 
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
        />
        <input 
          type="tel" 
          name="phone"
          placeholder="Teléfono*" 
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
        />
        <input 
          type="email" 
          name="from_email"
          placeholder="Correo electrónico*" 
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
        />
        <textarea 
          name="message"
          placeholder="Tu mensaje" 
          rows="5"
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
        ></textarea>
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
        </button>
        {submitMessage && (
          <p className={`text-center font-semibold ${submitMessage.includes('éxito') ? 'text-green-600' : 'text-red-600'}`}>
            {submitMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default FormGeneral;
