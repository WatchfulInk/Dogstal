import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FormPerros from './components/FormPerros';
import FormGatos from './components/FormGatos';
import FormAves from './components/FormAves';
import FormOtrasEspecies from './components/FormOtrasEspecies';
import FormGeneral from './components/FormGeneral';
import ServiceCard from './components/ServiceCard'

// Helper function to get the correct asset path
const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path}`.replace(/\/+/g, '/');
};

function App() {
  const [currentService, setCurrentService] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentPartner, setCurrentPartner] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [isRetratadogsOpen, setIsRetratadogsOpen] = useState(false);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPerrosFormOpen, setIsPerrosFormOpen] = useState(false);
  const [isGatosFormOpen, setIsGatosFormOpen] = useState(false);
  const [isAvesFormOpen, setIsAvesFormOpen] = useState(false);
  const [isOtrasEspeciesFormOpen, setIsOtrasEspeciesFormOpen] = useState(false);

  const heroImages = [
    getAssetPath('PerroPrincipal.png'),
    getAssetPath('GatoPrincipal.png'),
    getAssetPath('LoroPrincipal.png')
  ];

  const galleryImages = [
    getAssetPath('Galeria/G1.jpg'),
    getAssetPath('Galeria/G2.jpg'),
    getAssetPath('Galeria/G3.jpg'),
    getAssetPath('Galeria/G4.jpg'),
    getAssetPath('Galeria/G5.jpg'),
    getAssetPath('Galeria/G6.jpg'),
    getAssetPath('Galeria/G7.jpg'),
    getAssetPath('Galeria/G8.jpg')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const services = [
    {
      title: 'Perros',
      description: 'World\'s largest no-kill rescue and adoption organization with hundreds of dogs, cats, puppies and kittens available',
      image: getAssetPath('PerrosInicio.jpg')
    },
    {
      title: 'Gatos',
      description: 'World\'s largest no-kill rescue and adoption organization with hundreds of dogs, cats, puppies and kittens available',
      image: getAssetPath('GatoInicio.jpg')
    },
    {
      title: 'Aves',
      description: 'World\'s largest no-kill rescue and adoption organization with hundreds of dogs, cats, puppies and kittens available',
      image: getAssetPath('AvesInicio.jpg')
    },
    {
      title: 'Otras Especies',
      description: 'World\'s largest no-kill rescue and adoption organization with hundreds of dogs, cats, puppies and kittens available',
      image: getAssetPath('OtrasEspeciesInicio.jpg')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar getAssetPath={getAssetPath} />

      {/* Hero Section - Extended */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-visible pb-40 md:pb-60">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-8 relative z-10 text-center lg:text-left">
              <p className="text-amber-400 text-xs md:text-sm font-bold uppercase tracking-widest">— Conoce PRO ANIMAL ACADEMY</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Soluciones en <span className="text-amber-400 relative inline-block">Conducta </span> animal.
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Adiestramiento y consultoría de conducta animal con bases en ciencia del comportamiento aplicado con métodos libres de miedo y dolor.
              </p>

            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 cursor-pointer">
                <div className="absolute inset-0 rounded-full shadow-2xl ring-4 md:ring-8 ring-white/10 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 overflow-hidden group">
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
      <section id="services" className="py-12 md:py-20 bg-transparent -mt-60 md:-mt-80 relative z-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-amber-400 text-xs md:text-sm font-bold uppercase tracking-widest mb-2 md:mb-3">— Nuestros servicios</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">Especialidades en Conducta Animal</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                onClick={() => {
                  if (index === 0) setIsPerrosFormOpen(true);
                  else if (index === 1) setIsGatosFormOpen(true);
                  else if (index === 2) setIsAvesFormOpen(true);
                  else if (index === 3) setIsOtrasEspeciesFormOpen(true);
                }}
              />
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
            <FormGeneral />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer getAssetPath={getAssetPath} />

      {/* Floating Retratadogs Button */}
      <button
        onClick={() => setIsRetratadogsOpen(true)}
        className="fixed bottom-4 right-4 z-40 w-20 h-20 rounded-full overflow-hidden transition-all duration-300 hover:scale-125 shadow-lg"
      >
        <img 
          src={getAssetPath('Retradogs.png')} 
          alt="Retratadogs" 
          className="w-full h-full object-cover"
        />
      </button>

      {/* Retratadogs Modal */}
      {isRetratadogsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsRetratadogsOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center text-2xl font-bold transition-all hover:scale-110 z-10"
            >
              ×
            </button>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Retratadogs</h2>
                <p className="text-xl md:text-2xl text-amber-500 italic font-semibold mb-6">
                  no solo es un retrato,<br />
                  es su huella en el tiempo
                </p>
                <div className="h-1 w-32 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto mb-8"></div>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                  En Retratadogs transformamos momentos en recuerdos eternos. Nos especializamos en retratos personalizados de perros y gatos, resaltando su esencia y personalidad en cada imagen. Ofrecemos sesiones en bazares y a domicilio, adaptándonos a su entorno y comodidad. Creemos que nuestros amigos peludos son más que mascotas: son familia, y merecen ser celebrados con una obra de arte que inmortalice su historia.
                </p>
              </div>

              {/* Interactive Gallery */}
              <div className="space-y-6">
                {/* Main Carousel */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="aspect-[4/3] relative">
                    <img 
                      src={galleryImages[currentGalleryImage]} 
                      alt={`Retrato ${currentGalleryImage + 1}`}
                      className="w-full h-full object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
                      onClick={() => setSelectedImage(currentGalleryImage)}
                    />
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setCurrentGalleryImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-900 text-2xl font-bold shadow-lg transition-all hover:scale-110"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-900 text-2xl font-bold shadow-lg transition-all hover:scale-110"
                  >
                    ›
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {currentGalleryImage + 1} / {galleryImages.length}
                  </div>
                </div>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-4 gap-3">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentGalleryImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                        index === currentGalleryImage 
                          ? 'ring-4 ring-amber-500 scale-95 shadow-lg' 
                          : 'hover:ring-2 hover:ring-amber-300 hover:scale-95 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`Miniatura ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Viewer */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white hover:bg-gray-100 text-gray-900 rounded-full flex items-center justify-center text-3xl font-bold transition-all hover:scale-110 z-10"
          >
            ×
          </button>
          <img 
            src={galleryImages[selectedImage]} 
            alt={`Retrato fullscreen ${selectedImage + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-900 text-3xl font-bold shadow-lg transition-all hover:scale-110"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) => (prev + 1) % galleryImages.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-900 text-3xl font-bold shadow-lg transition-all hover:scale-110"
          >
            ›
          </button>
        </div>
      )}

      {/* Modal Formulario Perros */}
      <FormPerros 
        isOpen={isPerrosFormOpen} 
        onClose={() => setIsPerrosFormOpen(false)} 
      />

      {/* Modal Formulario Gatos */}
      <FormGatos 
        isOpen={isGatosFormOpen} 
        onClose={() => setIsGatosFormOpen(false)} 
      />

      {/* Modal Formulario Aves */}
      <FormAves 
        isOpen={isAvesFormOpen} 
        onClose={() => setIsAvesFormOpen(false)} 
      />

      {/* Modal Formulario Otras Especies */}
      <FormOtrasEspecies 
        isOpen={isOtrasEspeciesFormOpen} 
        onClose={() => setIsOtrasEspeciesFormOpen(false)} 
      />
    </div>
  )
}

export default App;
