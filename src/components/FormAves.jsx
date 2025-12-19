import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormAves = ({ isOpen, onClose }) => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [showAtendidoDetalle, setShowAtendidoDetalle] = useState(false);
  const [showConductasRepetitivasDetalle, setShowConductasRepetitivasDetalle] = useState(false);
  const [showMasAnimalesDetalle, setShowMasAnimalesDetalle] = useState(false);
  const [showAnimalesAnterioresDetalle, setShowAnimalesAnterioresDetalle] = useState(false);
  const [showCondicionMedicaDetalle, setShowCondicionMedicaDetalle] = useState(false);
  const [showTratamientoMedicoDetalle, setShowTratamientoMedicoDetalle] = useState(false);
  const [showAccesoJaulaDetalle, setShowAccesoJaulaDetalle] = useState(false);
  const [showRutinaVueloDetalle, setShowRutinaVueloDetalle] = useState(false);
  const [showAlasRecortadasDetalle, setShowAlasRecortadasDetalle] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Configuración de EmailJS - AGREGAR TU TEMPLATE_ID AQUÍ
    const SERVICE_ID = 'service_xja9k0e';
    const TEMPLATE_ID = 'TU_TEMPLATE_ID_AVES'; // REEMPLAZAR CON TU TEMPLATE ID
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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-4xl w-full my-8 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          ×
        </button>

        <div className="p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Consulta Inicial Conducta en Aves
          </h1>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            {/* Datos del Humano */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-700 border-b-2 border-gray-300 pb-2">
                Datos del Humano
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Primero"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Otro tutor o responsable (Primero)
                  </label>
                  <input
                    type="text"
                    name="otro-tutor-primero"
                    placeholder="Primero"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="otro-tutor-apellido"
                    placeholder="Apellido"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  Número de teléfono *
                </label>
                <input
                  type="tel"
                  name="telefono"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  Dirección *
                </label>
                <input
                  type="text"
                  name="direccion-linea1"
                  placeholder="Línea 1"
                  required
                  className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="direccion-linea2"
                  placeholder="Línea 2"
                  className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <input
                    type="text"
                    name="ciudad"
                    placeholder="Ciudad"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="estado"
                    placeholder="Estado"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                  <input
                    type="text"
                    name="codigo-zip"
                    placeholder="Código ZIP"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="pais"
                    placeholder="País"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  ¿A quién debo agradecer por referirte con nosotros? *
                </label>
                <input
                  type="text"
                  name="referencia"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </section>

            {/* Datos del Ave */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-700 border-b-2 border-gray-300 pb-2">
                Datos del Ave
              </h2>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  Nombre *
                </label>
                <input
                  type="text"
                  name="nombre-ave"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Edad *
                  </label>
                  <input
                    type="number"
                    name="edad-ave"
                    placeholder="Ej: 3"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Unidad *
                  </label>
                  <select
                    name="edad-unidad"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="meses">Meses</option>
                    <option value="años">Años</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  Sexo *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sexo"
                      value="Macho"
                      required
                      className="mr-2"
                    />
                    Macho
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sexo"
                      value="Hembra"
                      className="mr-2"
                    />
                    Hembra
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sexo"
                      value="Desconocido"
                      className="mr-2"
                    />
                    Desconocido
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  Especie *
                </label>
                <input
                  type="text"
                  name="especie"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  Peso (gramos) *
                </label>
                <input
                  type="number"
                  name="peso"
                  step="0.1"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  Medio de Adquisición *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="adquisicion"
                      value="Criadero"
                      required
                      className="mr-2"
                    />
                    Criadero
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="adquisicion"
                      value="Tienda de mascotas"
                      className="mr-2"
                    />
                    Tienda de mascotas
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="adquisicion"
                      value="Rescate"
                      className="mr-2"
                    />
                    Rescate
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="adquisicion"
                      value="Regalo"
                      className="mr-2"
                    />
                    Regalo
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="adquisicion"
                      value="Otra"
                      className="mr-2"
                    />
                    Otra
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Edad de adquisición *
                  </label>
                  <input
                    type="number"
                    name="edad-adquisicion"
                    placeholder="Ej: 2"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Unidad *
                  </label>
                  <select
                    name="edad-adquisicion-unidad"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="meses">Meses</option>
                    <option value="años">Años</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Evolución */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-700 border-b-2 border-gray-300 pb-2">
                Evolución
              </h2>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  Describe el motivo de la consulta *
                </label>
                <textarea
                  name="motivo-consulta"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  ¿Cuándo notaste que inició el problema? *
                </label>
                <input
                  type="text"
                  name="inicio-problema"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  Enlista cualquier circunstancia, situación, hora, etc, que detone el (los) problemas *
                </label>
                <textarea
                  name="circunstancias-problema"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  ¿Se ha atendido este caso anteriormente? *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="atendido"
                      value="Sí"
                      required
                      onChange={(e) => setShowAtendidoDetalle(e.target.value === 'Sí')}
                      className="mr-2"
                    />
                    Sí
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="atendido"
                      value="No"
                      onChange={(e) => setShowAtendidoDetalle(e.target.value === 'Sí')}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
                {showAtendidoDetalle && (
                  <div className="mt-4 ml-6">
                    <label className="block mb-2 font-semibold text-gray-700">
                      Describa en qué consistió el programa:
                    </label>
                    <textarea
                      name="atendido-detalle-especificar"
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                )}
              </div>
            </section>

            {/* Otros aspectos de la conducta del ave */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-700 border-b-2 border-gray-300 pb-2">
                Otros aspectos de la conducta del ave
              </h2>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  ¿Muestra conductas repetitivas? *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="conductas-repetitivas"
                      value="Sí"
                      required
                      onChange={(e) => setShowConductasRepetitivasDetalle(e.target.value === 'Sí')}
                      className="mr-2"
                    />
                    Sí
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="conductas-repetitivas"
                      value="No"
                      onChange={(e) => setShowConductasRepetitivasDetalle(e.target.value === 'Sí')}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
                {showConductasRepetitivasDetalle && (
                  <div className="mt-4 ml-6">
                    <label className="block mb-2 font-semibold text-gray-700">
                      Describe las conductas repetitivas:
                    </label>
                    <textarea
                      name="conductas-repetitivas-especificar"
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  ¿Viven más animales en casa? *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="mas-animales"
                      value="Sí"
                      required
                      onChange={(e) => setShowMasAnimalesDetalle(e.target.value === 'Sí')}
                      className="mr-2"
                    />
                    Sí
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="mas-animales"
                      value="No"
                      onChange={(e) => setShowMasAnimalesDetalle(e.target.value === 'Sí')}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
                {showMasAnimalesDetalle && (
                  <div className="mt-4 ml-6">
                    <label className="block mb-2 font-semibold text-gray-700">
                      ¿Cuántos?
                    </label>
                    <input
                      type="text"
                      name="mas-animales-detalle-especificar"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  ¿Cuántas personas viven en casa incluyéndote? *
                </label>
                <input
                  type="number"
                  name="numero-personas"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  ¿Has tenido animales anteriormente? *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="animales-anteriores"
                      value="Sí"
                      required
                      onChange={(e) => setShowAnimalesAnterioresDetalle(e.target.value === 'Sí')}
                      className="mr-2"
                    />
                    Sí
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="animales-anteriores"
                      value="No"
                      onChange={(e) => setShowAnimalesAnterioresDetalle(e.target.value === 'Sí')}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
                {showAnimalesAnterioresDetalle && (
                  <div className="mt-4 ml-6">
                    <label className="block mb-2 font-semibold text-gray-700">
                      ¿Cuáles?
                    </label>
                    <input
                      type="text"
                      name="animales-anteriores-detalle-especificar"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}
              </div>
            </section>

            {/* Aspectos médicos */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-700 border-b-2 border-gray-300 pb-2">
                Aspectos médicos
              </h2>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  ¿Existen condiciones médicas? *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="condicion-medica"
                      value="Sí"
                      required
                      onChange={(e) => setShowCondicionMedicaDetalle(e.target.value === 'Sí')}
                      className="mr-2"
                    />
                    Sí
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="condicion-medica"
                      value="No"
                      onChange={(e) => setShowCondicionMedicaDetalle(e.target.value === 'Sí')}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
                {showCondicionMedicaDetalle && (
                  <div className="mt-4 ml-6">
                    <label className="block mb-2 font-semibold text-gray-700">
                      ¿Cuáles?
                    </label>
                    <input
                      type="text"
                      name="condicion-medica-detalle-especificar"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  ¿Toma actualmente algún tratamiento médico? *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="tratamiento-medico"
                      value="Sí"
                      required
                      onChange={(e) => setShowTratamientoMedicoDetalle(e.target.value === 'Sí')}
                      className="mr-2"
                    />
                    Sí
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="tratamiento-medico"
                      value="No"
                      onChange={(e) => setShowTratamientoMedicoDetalle(e.target.value === 'Sí')}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
                {showTratamientoMedicoDetalle && (
                  <div className="mt-4 ml-6">
                    <label className="block mb-2 font-semibold text-gray-700">
                      ¿Cuál?
                    </label>
                    <input
                      type="text"
                      name="tratamiento-medico-detalle-especificar"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}
              </div>
            </section>

            {/* Datos relativos a la vida de tu ave */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-700 border-b-2 border-gray-300 pb-2">
                Datos relativos a la vida de tu ave
              </h2>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  Describe en detalle las características del hábitat de tu ave y el entorno a su alrededor *
                </label>
                <textarea
                  name="habitat"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  ¿Tiene acceso a salir de su jaula? *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="acceso-jaula"
                      value="Sí"
                      required
                      onChange={(e) => setShowAccesoJaulaDetalle(e.target.value === 'Sí')}
                      className="mr-2"
                    />
                    Sí
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="acceso-jaula"
                      value="No"
                      onChange={(e) => setShowAccesoJaulaDetalle(e.target.value === 'Sí')}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
                {showAccesoJaulaDetalle && (
                  <div className="mt-4 ml-6">
                    <label className="block mb-2 font-semibold text-gray-700">
                      Describe la rutina:
                    </label>
                    <textarea
                      name="acceso-jaula-detalle-especificar"
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  ¿Tu ave tiene espacios y rutina de vuelo? *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="rutina-vuelo"
                      value="Sí"
                      required
                      onChange={(e) => setShowRutinaVueloDetalle(e.target.value === 'Sí')}
                      className="mr-2"
                    />
                    Sí
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="rutina-vuelo"
                      value="No"
                      onChange={(e) => setShowRutinaVueloDetalle(e.target.value === 'Sí')}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
                {showRutinaVueloDetalle && (
                  <div className="mt-4 ml-6">
                    <label className="block mb-2 font-semibold text-gray-700">
                      Descríbelos:
                    </label>
                    <textarea
                      name="rutina-vuelo-detalle-especificar"
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  ¿Se le han recortado las alas? *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="alas-recortadas"
                      value="Sí"
                      required
                      onChange={(e) => setShowAlasRecortadasDetalle(e.target.value === 'Sí')}
                      className="mr-2"
                    />
                    Sí
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="alas-recortadas"
                      value="No"
                      onChange={(e) => setShowAlasRecortadasDetalle(e.target.value === 'Sí')}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
                {showAlasRecortadasDetalle && (
                  <div className="mt-4 ml-6">
                    <label className="block mb-2 font-semibold text-gray-700">
                      Escribe las razones, la frecuencia y quién lleva a cabo el procedimiento:
                    </label>
                    <textarea
                      name="alas-recortadas-detalle-especificar"
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  Describe las rutinas de alimentación y el tipo de alimento *
                </label>
                <textarea
                  name="rutina-alimentacion"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  Describe las rutinas de limpieza y cómo se llevan a cabo *
                </label>
                <textarea
                  name="rutina-limpieza"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  Describe las rutinas de interacción con tu ave al día *
                </label>
                <textarea
                  name="rutina-interaccion"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  ¿Ha habido algún cambio desde que tu ave vive en casa? *
                </label>
                <select
                  name="cambio-vida"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
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
            </section>

            {/* Pronóstico */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-700 border-b-2 border-gray-300 pb-2">
                Pronóstico
              </h2>

              <div className="mb-4">
                <label className="block mb-2 font-semibold text-gray-700">
                  Enumera los objetivos a lograr *
                </label>
                <textarea
                  name="objetivos-consulta"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
            </section>

            <button
              type="submit"
              disabled={isSubmieuniontting}
              className={`w-full font-bold py-4 px-6 rounded-md text-lg transition duration-300 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
            </button>

            {submitMessage && (
              <div
                className={`mt-4 p-4 rounded-md text-center font-semibold ${
                  submitMessage.includes('éxito')
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAves;
