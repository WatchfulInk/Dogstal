import React, { useState } from 'react';

const Navbar = ({ getAssetPath }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2 md:gap-3">
            <img 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/YyvZoxW9MRc7bKy0/escudo-proanimal-academy-A1aBKpjo5nHeXxll.png"
              alt="ProAnimal Academy"
              className="h-12 md:h-16 w-auto object-contain"
            />
            <div className="text-left">
              <div>
                <span className="font-bold text-red-600 text-base md:text-xl font-[Arial,sans-serif]">
                  PRO
                </span>{" "}
                <span className="font-bold text-black text-base md:text-xl font-[Arial,sans-serif]">
                  ANIMAL
                </span>
              </div>
              <div className="text-gray-700 text-[8px] md:text-xs tracking-[2px] md:tracking-[4px] font-[Arial,sans-serif] uppercase">
                ACADEMY
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-semibold text-gray-700 hover:text-amber-400 transition-colors">Nuestros servicios</a>
            <a href="#about" className="text-sm font-semibold text-gray-700 hover:text-amber-400 transition-colors">Sobre nosotros</a>
            <a href="#pricing" className="text-sm font-semibold text-gray-700 hover:text-amber-400 transition-colors">Comienza aquí</a>
            <a href="#contact" className="text-sm font-semibold text-gray-700 hover:text-amber-400 transition-colors">Contáctanos</a>
          </nav>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-2">
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-amber-400 transition-colors py-2">Nuestros servicios</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-amber-400 transition-colors py-2">Sobre nosotros</a>
              <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-amber-400 transition-colors py-2">Comienza aquí</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-amber-400 transition-colors py-2">Contáctanos</a>
              <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
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
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
