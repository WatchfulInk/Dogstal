import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const FormPerros = ({ isOpen, onClose }) => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Configuración de EmailJS
    const SERVICE_ID = 'service_xja9k0e';
    const TEMPLATE_ID = 'template_6yixk79';
    const PUBLIC_KEY = 'Ti4-S06KAacT1w-Vq';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        console.log('Email enviado:', result.text);
        setSubmitMessage('¡Consulta enviada con éxito! Te contactaremos pronto.');
        formRef.current.reset();
        setIsSubmitting(false);
        
        // Cerrar modal después de 3 segundos
        setTimeout(() => {
          onClose();
          setSubmitMessage('');
        }, 3000);
      }, (error) => {
        console.log('Error al enviar:', error.text);
        setSubmitMessage('Hubo un error al enviar la consulta. Por favor intenta de nuevo.');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center text-2xl font-bold transition-all hover:scale-110 z-10"
        >
          ×
        </button>

        {/* Content */}
        <div className="p-6 md:p-10 max-h-[85vh] overflow-y-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-6">Consulta Inicial Conducta Canina</h1>
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Datos del Humano */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-amber-400 pb-2">Datos del Humano</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre *</label>
                  <input type="text" name="nombre" placeholder="Primero" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Apellido *</label>
                  <input type="text" name="apellido" placeholder="Apellido" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Otro manejador o responsable</label>
                  <input type="text" name="otro-responsable-primero" placeholder="Primero" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Apellido</label>
                  <input type="text" name="otro-responsable-apellido" placeholder="Apellido" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Número de teléfono *</label>
                <input type="tel" name="telefono" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Correo electrónico *</label>
                <input type="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Dirección *</label>
                <input type="text" name="direccion-linea1" placeholder="Línea 1" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                <input type="text" name="direccion-linea2" placeholder="Línea 2" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input type="text" name="ciudad" placeholder="Ciudad" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                  <input type="text" name="estado" placeholder="Estado" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input type="text" name="codigo-zip" placeholder="Código ZIP" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                  <input type="text" name="pais" placeholder="País" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿A quién debo agradecer por referirte con nosotros? *</label>
                <input type="text" name="referencia" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
              </div>
            </div>

            {/* Datos del Perro */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-amber-400 pb-2">Datos del Perro</h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre *</label>
                <input type="text" name="nombre-perro" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Edad *</label>
                  <input type="number" name="edad-perro" placeholder="Ej: 3" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Unidad</label>
                  <select name="edad-unidad" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent">
                    <option value="meses">Meses</option>
                    <option value="años">Años</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Sexo *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="sexo" value="Hembra esterilizada" required className="text-amber-500 focus:ring-amber-400" /> Hembra esterilizada</label>
                  <label className="flex items-center gap-2"><input type="radio" name="sexo" value="Hembra sin esterilizar" className="text-amber-500 focus:ring-amber-400" /> Hembra sin esterilizar</label>
                  <label className="flex items-center gap-2"><input type="radio" name="sexo" value="Macho castrado" className="text-amber-500 focus:ring-amber-400" /> Macho castrado</label>
                  <label className="flex items-center gap-2"><input type="radio" name="sexo" value="Macho sin castrar" className="text-amber-500 focus:ring-amber-400" /> Macho sin castrar</label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Raza *</label>
                <select name="raza" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent">
                  <option value="">Selecciona una raza</option>
                  <optgroup label="Perros Pequeños">
                    <option value="Chihuahua">Chihuahua</option>
                    <option value="Pomerania">Pomerania</option>
                    <option value="Pug">Pug</option>
                    <option value="Shih Tzu">Shih Tzu</option>
                    <option value="Yorkshire Terrier">Yorkshire Terrier</option>
                    <option value="Bichón Frisé">Bichón Frisé</option>
                    <option value="Dachshund (Salchicha)">Dachshund (Salchicha)</option>
                    <option value="Maltés">Maltés</option>
                    <option value="Jack Russell Terrier">Jack Russell Terrier</option>
                    <option value="Papillón">Papillón</option>
                  </optgroup>
                  <optgroup label="Perros Medianos">
                    <option value="Beagle">Beagle</option>
                    <option value="Border Collie">Border Collie</option>
                    <option value="Bulldog Francés">Bulldog Francés</option>
                    <option value="Cocker Spaniel">Cocker Spaniel</option>
                    <option value="Schnauzer Mediano">Schnauzer Mediano</option>
                    <option value="Staffordshire Bull Terrier">Staffordshire Bull Terrier</option>
                    <option value="Whippet">Whippet</option>
                    <option value="Basenji">Basenji</option>
                    <option value="Pastor Australiano">Pastor Australiano</option>
                    <option value="Shar Pei">Shar Pei</option>
                  </optgroup>
                  <optgroup label="Perros Grandes">
                    <option value="Labrador Retriever">Labrador Retriever</option>
                    <option value="Golden Retriever">Golden Retriever</option>
                    <option value="Pastor Alemán">Pastor Alemán</option>
                    <option value="Husky Siberiano">Husky Siberiano</option>
                    <option value="Boxer">Boxer</option>
                    <option value="Rottweiler">Rottweiler</option>
                    <option value="Dóberman">Dóberman</option>
                    <option value="Weimaraner">Weimaraner</option>
                    <option value="Akita Inu">Akita Inu</option>
                    <option value="Ridgeback">Ridgeback</option>
                  </optgroup>
                  <optgroup label="Perros Gigantes">
                    <option value="San Bernardo">San Bernardo</option>
                    <option value="Gran Danés">Gran Danés</option>
                    <option value="Mastín Napolitano">Mastín Napolitano</option>
                    <option value="Terranova">Terranova</option>
                    <option value="Boyero de Berna">Boyero de Berna</option>
                    <option value="Mastín Español">Mastín Español</option>
                    <option value="Dogo de Burdeos">Dogo de Burdeos</option>
                    <option value="Komondor">Komondor</option>
                    <option value="Kuvasz">Kuvasz</option>
                    <option value="Tosa Inu">Tosa Inu</option>
                  </optgroup>
                  <optgroup label="Perros de Trabajo y Guardia">
                    <option value="Malinois Belga">Malinois Belga</option>
                    <option value="Pastor Holandés">Pastor Holandés</option>
                    <option value="Cane Corso">Cane Corso</option>
                    <option value="Dogo Argentino">Dogo Argentino</option>
                    <option value="Alaskan Malamute">Alaskan Malamute</option>
                    <option value="Perro Lobo Checoslovaco">Perro Lobo Checoslovaco</option>
                    <option value="Perro de Presa Canario">Perro de Presa Canario</option>
                    <option value="Bullmastiff">Bullmastiff</option>
                    <option value="Schnauzer Gigante">Schnauzer Gigante</option>
                    <option value="Rottweiler">Rottweiler</option>
                  </optgroup>
                  <optgroup label="Perros de Caza">
                    <option value="Pointer Inglés">Pointer Inglés</option>
                    <option value="Setter Irlandés">Setter Irlandés</option>
                    <option value="Braco Alemán">Braco Alemán</option>
                    <option value="Vizsla">Vizsla</option>
                    <option value="Basset Hound">Basset Hound</option>
                    <option value="Coonhound">Coonhound</option>
                    <option value="Foxhound">Foxhound</option>
                    <option value="Springer Spaniel">Springer Spaniel</option>
                    <option value="Boykin Spaniel">Boykin Spaniel</option>
                    <option value="Spinone Italiano">Spinone Italiano</option>
                  </optgroup>
                  <optgroup label="Perros de Pastoreo">
                    <option value="Border Collie">Border Collie</option>
                    <option value="Pastor de Shetland">Pastor de Shetland</option>
                    <option value="Collie">Collie</option>
                    <option value="Welsh Corgi Pembroke">Welsh Corgi Pembroke</option>
                    <option value="Welsh Corgi Cardigan">Welsh Corgi Cardigan</option>
                    <option value="Pastor Blanco Suizo">Pastor Blanco Suizo</option>
                    <option value="Pastor Catalán">Pastor Catalán</option>
                    <option value="Kelpie Australiano">Kelpie Australiano</option>
                    <option value="Bobtail">Bobtail</option>
                    <option value="Pastor Bergamasco">Pastor Bergamasco</option>
                  </optgroup>
                  <optgroup label="Perros sin Pelo">
                    <option value="Xoloitzcuintle">Xoloitzcuintle</option>
                    <option value="Perro sin pelo del Perú">Perro sin pelo del Perú</option>
                    <option value="Crestado Chino">Crestado Chino</option>
                    <option value="Terrier Americano sin pelo">Terrier Americano sin pelo</option>
                  </optgroup>
                  <option value="Otra">Otra (especificar)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Peso (kg) *</label>
                <input type="number" name="peso" step="0.1" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Medio de Adquisición *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="adquisicion" value="Criadero" required className="text-amber-500 focus:ring-amber-400" /> Criadero</label>
                  <label className="flex items-center gap-2"><input type="radio" name="adquisicion" value="Refugio" className="text-amber-500 focus:ring-amber-400" /> Refugio</label>
                  <label className="flex items-center gap-2"><input type="radio" name="adquisicion" value="Rescate" className="text-amber-500 focus:ring-amber-400" /> Rescate</label>
                  <label className="flex items-center gap-2"><input type="radio" name="adquisicion" value="Regalo" className="text-amber-500 focus:ring-amber-400" /> Regalo</label>
                  <label className="flex items-center gap-2"><input type="radio" name="adquisicion" value="Otra" className="text-amber-500 focus:ring-amber-400" /> Otra</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Edad de adquisición *</label>
                  <input type="number" name="edad-adquisicion" placeholder="Ej: 2" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Unidad</label>
                  <select name="edad-adquisicion-unidad" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent">
                    <option value="meses">Meses</option>
                    <option value="años">Años</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Motivo de consulta *</label>
                <textarea name="motivo-consulta" rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"></textarea>
              </div>
            </div>

            {/* Evolución */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-amber-400 pb-2">Evolución</h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Describe el motivo de la consulta *</label>
                <textarea name="descripcion-problema" rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Si es un caso de problemas de comportamiento, ¿Cuándo notaste que inició el problema?</label>
                <input type="text" name="inicio-problema" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Enlista cualquier circunstancia, situación, hora, etc, que detone el (los) problemas</label>
                <textarea name="circunstancias-problema" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Se ha atendido este caso anteriormente? *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="atendido" value="Sí" required className="text-amber-500 focus:ring-amber-400" /> Sí</label>
                  <label className="flex items-center gap-2"><input type="radio" name="atendido" value="No" className="text-amber-500 focus:ring-amber-400" /> No</label>
                </div>
              </div>
            </div>

            {/* Otros aspectos de la conducta del perro */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-amber-400 pb-2">Otros aspectos de la conducta del perro</h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Cómo se comporta cuando se queda solo en casa? *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="checkbox" name="solo-casa" value="Sin Problemas" className="text-amber-500 focus:ring-amber-400 rounded" /> Sin Problemas</label>
                  <label className="flex items-center gap-2"><input type="checkbox" name="solo-casa" value="Ladra" className="text-amber-500 focus:ring-amber-400 rounded" /> Ladra</label>
                  <label className="flex items-center gap-2"><input type="checkbox" name="solo-casa" value="Llora" className="text-amber-500 focus:ring-amber-400 rounded" /> Llora</label>
                  <label className="flex items-center gap-2"><input type="checkbox" name="solo-casa" value="Destruye Cosas" className="text-amber-500 focus:ring-amber-400 rounded" /> Destruye Cosas</label>
                  <label className="flex items-center gap-2"><input type="checkbox" name="solo-casa" value="Defeca / Orina" className="text-amber-500 focus:ring-amber-400 rounded" /> Defeca / Orina</label>
                  <label className="flex items-center gap-2"><input type="checkbox" name="solo-casa" value="Escapa" className="text-amber-500 focus:ring-amber-400 rounded" /> Escapa</label>
                  <label className="flex items-center gap-2"><input type="checkbox" name="solo-casa" value="Otros" className="text-amber-500 focus:ring-amber-400 rounded" /> Otros</label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Cómo se comporta con la gente que no conoce? *</label>
                <input type="text" name="comportamiento-personas" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Cómo se comporta con otros perros? *</label>
                <input type="text" name="comportamiento-perros" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Muestra miedo ante algún estímulo o cosa? *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="miedo" value="Sí" required className="text-amber-500 focus:ring-amber-400" /> Sí</label>
                  <label className="flex items-center gap-2"><input type="radio" name="miedo" value="No" className="text-amber-500 focus:ring-amber-400" /> No</label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Realiza con frecuencia conductas repetitivas como dar vueltas persiguiéndose la cola, lamerse las patas, etc.? *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="conductas-repetitivas" value="Sí" required className="text-amber-500 focus:ring-amber-400" /> Sí</label>
                  <label className="flex items-center gap-2"><input type="radio" name="conductas-repetitivas" value="No" className="text-amber-500 focus:ring-amber-400" /> No</label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Viven más animales en casa? *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="mas-animales" value="Sí" required className="text-amber-500 focus:ring-amber-400" /> Sí</label>
                  <label className="flex items-center gap-2"><input type="radio" name="mas-animales" value="No" className="text-amber-500 focus:ring-amber-400" /> No</label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Cuántas personas viven en casa incluyéndote? *</label>
                <input type="number" name="numero-personas" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Has tenido animales anteriormente? *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="animales-anteriores" value="Sí" required className="text-amber-500 focus:ring-amber-400" /> Sí</label>
                  <label className="flex items-center gap-2"><input type="radio" name="animales-anteriores" value="No" className="text-amber-500 focus:ring-amber-400" /> No</label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Cuántas veces come al día? ¿Qué tipo de alimento? y ¿En qué cantidades? *</label>
                <textarea name="alimentacion" rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Describe cómo es la rutina de alimentación. *</label>
                <textarea name="rutina-alimentacion" rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Recibe otro tipo de comida distinta a su alimento? *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="otra-comida" value="Sí" required className="text-amber-500 focus:ring-amber-400" /> Sí</label>
                  <label className="flex items-center gap-2"><input type="radio" name="otra-comida" value="No" className="text-amber-500 focus:ring-amber-400" /> No</label>
                </div>
              </div>
            </div>

            {/* Aspectos médicos */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-amber-400 pb-2">Aspectos médicos</h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Existen condiciones médicas? *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="condicion-medica" value="Sí" required className="text-amber-500 focus:ring-amber-400" /> Sí</label>
                  <label className="flex items-center gap-2"><input type="radio" name="condicion-medica" value="No" className="text-amber-500 focus:ring-amber-400" /> No</label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Toma actualmente alguna medicación? *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="medicacion" value="Sí" required className="text-amber-500 focus:ring-amber-400" /> Sí</label>
                  <label className="flex items-center gap-2"><input type="radio" name="medicacion" value="No" className="text-amber-500 focus:ring-amber-400" /> No</label>
                </div>
              </div>
            </div>

            {/* Datos relativos a la vida de tu perro */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-amber-400 pb-2">Datos relativos a la vida de tu perro</h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Cuántas veces sale de paseo al día? *</label>
                <input type="number" name="paseos" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Describe la dinámica de los paseos:</label>
                <textarea name="dinamica-paseos" rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Ha habido algún cambio desde que tu perro vive en casa? *</label>
                <select name="cambio-vida" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent">
                  <option value="No">No</option>
                  <option value="Pérdida de un miembro de la familia">Pérdida de un miembro de la familia</option>
                  <option value="Pérdida de un animal en casa">Pérdida de un animal en casa</option>
                  <option value="Matrimonio">Matrimonio</option>
                  <option value="Divorcio">Divorcio</option>
                  <option value="Nacimiento de un bebé">Nacimiento de un bebé</option>
                  <option value="Llegada de un miembro nuevo en la familia">Llegada de un miembro nuevo en la familia</option>
                  <option value="Cambio de vivienda">Cambio de vivienda</option>
                  <option value="Alguien se ha ido a vivir fuera de casa">Alguien se ha ido a vivir fuera de casa</option>
                  <option value="Animal nuevo en casa">Animal nuevo en casa</option>
                  <option value="Cambio de trabajo y rutinas">Cambio de trabajo y rutinas</option>
                  <option value="Durante o post confinamiento de COVID-19">Durante o post confinamiento de COVID-19</option>
                </select>
              </div>
            </div>

            {/* Pronóstico */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-amber-400 pb-2">Pronóstico</h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Enumera los objetivos a lograr *</label>
                <textarea name="objetivos-consulta" rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"></textarea>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 text-lg disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
            </button>

            {submitMessage && (
              <div className={`text-center p-4 rounded-lg font-semibold ${submitMessage.includes('éxito') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPerros;
