import React from "react";

const Conducta2 = () => {
  const cards = [
    {
      title: "NOSOTROS",
      desc: "Conoce cómo trabajamos y nuestra experiencia.",
      btn: "Nosotros",
      delay: "animation-delay-100",
    },
    {
      title: "ETICA PROFESIONAL",
      desc: "Conoce los principios éticos profesionales y estándares de práctica a los cuáles nos adherimos.",
      btn: "Ética",
      delay: "animation-delay-200",
    },
    {
      title: "BIENESTAR ANIMAL",
      desc: "Bienestar animal y su aplicación en nuestra práctica profesional.",
      btn: "Bienestar",
      delay: "animation-delay-300",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      {/* Tarjetas */}
      <div className="mt-16 grid gap-12 md:grid-cols-3 max-w-6xl mx-auto px-4">
        {cards.map((item, index) => (
          <div
            key={index}
            className={`text-center animate-slide-up ${item.delay}`}
          >
            <div className="mx-auto w-32 h-32 overflow-hidden rounded-full shadow-lg transform hover:scale-110 transition-all duration-500">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-800 transform hover:scale-105 transition-all duration-300">
              {item.btn}
            </button>
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default Conducta2;
