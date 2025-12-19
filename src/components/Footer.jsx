import React from 'react';

const Footer = ({ getAssetPath }) => {
  return (
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
                <img src={getAssetPath('facebook.png')} alt="Facebook" className="w-10 h-10 object-cover" />
              </a>
              <a href="https://www.instagram.com/proanimalacademy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-all hover:scale-110 flex-shrink-0">
                <img src={getAssetPath('instagram.png')} alt="Instagram" className="w-10 h-10 object-cover" />
              </a>
              <a href="https://www.youtube.com/dogstal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-all hover:scale-110 flex-shrink-0">
                <img src={getAssetPath('youtube.png')} alt="YouTube" className="w-15 h-15 object-cover" />
              </a>
              <a href="https://www.tiktok.com/@proanimalacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-all hover:scale-110 flex-shrink-0">
                <img src={getAssetPath('tiktok.png')} alt="TikTok" className="w-10 h-10 object-cover" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
