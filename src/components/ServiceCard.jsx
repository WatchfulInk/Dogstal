import React from 'react';

const ServiceCard = ({ service, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
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
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
        <h3 className="text-xl md:text-2xl font-bold leading-tight">{service.title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
