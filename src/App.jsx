import React, { useState, useEffect } from 'react'

function App() {
  const [currentService, setCurrentService] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentPartner, setCurrentPartner] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const heroImages = [
    './PerroPrincipal.png',
    './GatoPrincipal.png',
    './LoroPrincipal.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: 'Perros',
      description: 'World\'s largest no-kill rescue and adoption organization with hundreds of dogs, cats, puppies and kittens available',
      image: './PerrosInicio.jpg'
    },
    {
      title: 'Gatos',
      description: 'World\'s largest no-kill rescue and adoption organization with hundreds of dogs, cats, puppies and kittens available',
      image: './GatoInicio.jpg'
    },
    {
      title: 'Aves',
      description: 'World\'s largest no-kill rescue and adoption organization with hundreds of dogs, cats, puppies and kittens available',
      image: './AvesInicio.jpg'
    },
    {
      title: 'Otras Especies',
      description: 'World\'s largest no-kill rescue and adoption organization with hundreds of dogs, cats, puppies and kittens available',
      image: './OtrasEspeciesInicio.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/YyvZoxW9MRc7bKy0/escudo-proanimal-academy-A1aBKpjo5nHeXxll.png"
                alt="ProAnimal Academy"
                className="h-16 w-auto object-contain"
              />
              <div className="text-center md:text-left">
                <div>
                  <span className="font-bold text-red-600 text-xl font-[Arial,sans-serif]">
                    PRO
                  </span>{" "}
                  <span className="font-bold text-black text-xl font-[Arial,sans-serif]">
                    ANIMAL
                  </span>
                </div>
                <div className="text-gray-700 text-xs tracking-[4px] font-[Arial,sans-serif] uppercase">
                  ACADEMY
                </div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-semibold text-gray-700 hover:text-amber-400 transition-colors">Nuestros servicios</a>
              <a href="#about" className="text-sm font-semibold text-gray-700 hover:text-amber-400 transition-colors">Sobre nosotros</a>
              <a href="#pricing" className="text-sm font-semibold text-gray-700 hover:text-amber-400 transition-colors">Comienza aquí</a>
              <a href="#contact" className="text-sm font-semibold text-gray-700 hover:text-amber-400 transition-colors">Contáctanos</a>
            </nav>
            <div className="hidden md:flex items-center gap-2">
              <a href="https://www.facebook.com/Dogstal/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-all hover:scale-110 flex-shrink-0">
                <img src="./facebook.png" alt="Facebook" className="w-15 h-15 object-cover" />
              </a>
              <a href="https://www.instagram.com/proanimalacademy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-all hover:scale-110 flex-shrink-0">
                <img src="./instagram.png" alt="Instagram" className="w-10 h-10 object-cover" />
              </a>
              <a href="https://www.youtube.com/dogstal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-all hover:scale-110 flex-shrink-0">
                <img src="./youtube.png" alt="YouTube" className="w-15 h-15 object-cover" />
              </a>
              <a href="https://www.tiktok.com/@proanimalacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-all hover:scale-110 flex-shrink-0">
                <img src="./tiktok.png" alt="TikTok" className="w-10 h-10 object-cover" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Extended */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-visible pb-60">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <p className="text-amber-400 text-sm font-bold uppercase tracking-widest">— Conoce PRO ANIMAL ACADEMY</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Soluciones en <span className="text-amber-400 relative inline-block">Conducta </span> animal.
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
              Adiestramiento y consultoría de conducta animal con bases en ciencia del comportamiento aplicado con métodos libres de miedo y dolor.
              </p>

            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 cursor-pointer">
                <div className="absolute inset-0 rounded-full shadow-2xl ring-8 ring-white/10 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 overflow-hidden group">
                  {heroImages.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt="Principal" 
                      className={`absolute w-full h-full object-contain transition-all duration-700 ${
                        index === currentHeroImage 
                          ? 'opacity-100 scale-[1.4] translate-y-[15%] group-hover:scale-[1.6] group-hover:translate-y-[5%]' 
                          : 'opacity-0 scale-100'
                      }`}
                      style={{
                        objectPosition: 'center bottom',
                        filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-transparent -mt-80 relative z-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm font-bold uppercase tracking-widest mb-3">— Nuestros servicios</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white">Especialidades en Conducta Animal</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Imagen con efecto zoom */}
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Título (siempre visible) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold leading-tight">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-white flex items-center justify-center shadow-2xl p-8">
                  <img 
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=382,h=184,fit=crop/YyvZoxW9MRc7bKy0/iaabc_web_acreditado-AR0MWkNZbwhBzoKZ.png"
                    alt="IAABC Acreditado"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-amber-500 text-sm font-bold uppercase tracking-widest">— Sobre Nosotros</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">Compromiso con la Excelencia Profesional</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                En Pro Animal Academy nos dedicamos a ofrecer servicios profesionales de la más alta calidad basados en ciencia del comportamiento y ética profesional.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 text-xl mt-0.5 font-bold">•</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Nosotros</h3>
                    <p className="text-gray-600">Conoce cómo trabajamos y nuestra experiencia.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 text-xl mt-0.5 font-bold">•</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Ética Profesional</h3>
                    <p className="text-gray-600">Conoce los principios éticos profesionales y estándares de práctica a los cuáles nos adherimos.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 text-xl mt-0.5 font-bold">•</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Bienestar Animal</h3>
                    <p className="text-gray-600">Bienestar animal y su aplicación en nuestra práctica profesional.</p>
                  </div>
                </li>
              </ul>
              <button className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                Conoce más
              </button>
            </div>
          </div>
        </div>
      </section>
  
      {/* Pricing Section */}
      <section id="pricing" className="py-5 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-3">— Comienza aquí</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">Tu Camino hacia el Cambio</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Queremos conocer tu caso, para ello te pedimos nos llenes este sencillo formulario para hacer un análisis inicial y poder ofrecerte un plan de trabajo de acuerdo a tus necesidades. El envío de este formulario no tiene ningún costo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 - Primer Paso */}
            <div className="bg-white border-2 border-gray-200 hover:border-amber-400 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-3xl text-white font-bold mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Primer paso</h3>
              <h4 className="text-xl font-semibold text-amber-500 mb-4">Cuéntanos tu caso</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Completa éste formulario para obtener información general de tu caso y posteriormente ponernos en contacto contigo para recavar mayor información y enviarte una propuesta de trabajo.
              </p>
              <button className="w-full px-6 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                Llenar formulario
              </button>
            </div>

            {/* Card 2 - Manos a la obra */}
            <div className="bg-white border-2 border-gray-200 hover:border-amber-400 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-3xl text-white font-bold mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Manos a la obra</h3>
              <h4 className="text-xl font-semibold text-amber-500 mb-4">Agenda tu cita</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Después de recibir la propuesta de trabajo podemos agendar las citas en el horario que mejor te convenga para comenzar a crear resultados.
              </p>
              <button className="w-full px-6 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                Agendar cita
              </button>
            </div>

            {/* Card 3 - Tienes dudas */}
            <div className="bg-white border-2 border-gray-200 hover:border-amber-400 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-3xl text-white font-bold mb-6 shadow-lg">
                ?
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Tienes dudas?</h3>
              <h4 className="text-xl font-semibold text-amber-500 mb-4">Contáctanos</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Estamos a tus órdenes para resolver cualquier duda
              </p>
              <button className="w-full px-6 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-xl border-2 border-gray-100">
              <div className="text-center mb-8">
                <p className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-3">— Contáctanos</p>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">¿Tienes Preguntas?</h2>
                <p className="text-gray-600 leading-relaxed">
                  Siéntete libre de contactarnos para cualquier consulta.
                </p>
              </div>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nombre completo*" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                />
                <input 
                  type="tel" 
                  placeholder="Teléfono*" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Correo electrónico*" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                />
                <textarea 
                  placeholder="Tu mensaje" 
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                ></textarea>
                <button className="w-full px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  Enviar mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/YyvZoxW9MRc7bKy0/escudo-proanimal-academy-A1aBKpjo5nHeXxll.png"
                alt="ProAnimal Academy"
                className="h-16 w-auto object-contain"
              />
              <div className="text-center md:text-left">
                <div>
                  <span className="font-bold text-red-600 text-xl font-[Arial,sans-serif]">
                    PRO
                  </span>{" "}
                  <span className="font-bold text-white text-xl font-[Arial,sans-serif]">
                    ANIMAL
                  </span>
                </div>
                <div className="text-gray-400 text-xs tracking-[4px] font-[Arial,sans-serif] uppercase">
                  ACADEMY
                </div>
              </div>
            </div>
            <nav className="flex flex-wrap items-center gap-6 text-sm font-semibold text-gray-400">
              <a href="#services" className="hover:text-amber-400 transition-colors">Nuestros servicios</a>
              <a href="#about" className="hover:text-amber-400 transition-colors">Sobre nosotros</a>
              <a href="#pricing" className="hover:text-amber-400 transition-colors">Comienza aquí</a>
              <a href="#contact" className="hover:text-amber-400 transition-colors">Contáctanos</a>
            </nav>
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-gray-400">Siguenos en :</span>
              <div className="flex gap-2">
                <a href="https://www.facebook.com/Dogstal/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-all hover:scale-110 flex-shrink-0">
                  <img src="./facebook.png" alt="Facebook" className="w-15 h-15 object-cover" />
                </a>
                <a href="https://www.instagram.com/proanimalacademy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-all hover:scale-110 flex-shrink-0">
                  <img src="./instagram.png" alt="Instagram" className="w-10 h-10 object-cover" />
                </a>
                <a href="https://www.youtube.com/dogstal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-all hover:scale-110 flex-shrink-0">
                  <img src="./youtube.png" alt="YouTube" className="w-15 h-15 object-cover" />
                </a>
                <a href="https://www.tiktok.com/@proanimalacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-all hover:scale-110 flex-shrink-0">
                  <img src="./tiktok.png" alt="TikTok" className="w-10 h-10 object-cover" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App;
