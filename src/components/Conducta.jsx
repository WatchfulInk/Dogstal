import React from "react";

const Conducta = () => {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?auto=format&fit=crop&w=160&h=160",
      title: "NOSOTROS",
      desc: "Conoce cómo trabajamos y nuestra experiencia.",
      btn: "Nosotros",
      delay: "animation-delay-100",
    },
    {
      img: "https://images.unsplash.com/photo-1646133071244-e1288bd80d81?auto=format&fit=crop&w=160&h=160",
      title: "ETICA PROFESIONAL",
      desc: "Conoce los principios éticos profesionales y estándares de práctica a los cuáles nos adherimos.",
      btn: "Ética",
      delay: "animation-delay-200",
    },
    {
      img: "https://images.unsplash.com/photo-1641502227969-0811dc416f5e?auto=format&fit=crop&w=160&h=160",
      title: "BIENESTAR ANIMAL",
      desc: "Bienestar animal y su aplicación en nuestra práctica profesional.",
      btn: "Bienestar",
      delay: "animation-delay-300",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Encabezado */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 animate-fade-in">
          SOLUCIONES EN <br className="hidden md:block" /> CONDUCTA ANIMAL
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 animate-slide-up">
          Adiestramiento y consultoría de conducta animal con bases en ciencia
          del comportamiento aplicado con{" "}
          <span className="font-semibold">
            métodos libres de miedo y dolor.
          </span>
        </p>
        <button className="bg-gray-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-gray-900 transform hover:scale-105 transition-all duration-300 animate-bounce-slow">
          Contáctanos
        </button>
      </div>

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

export default Conducta;
