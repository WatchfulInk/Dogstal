import React from "react";

const Conducta2 = () => {
  const cards = [
    {
      title: "PRIMER PASO",
      subtitle: "Cuéntanos tu caso",
      desc: "Completa éste formulario para obtener información general de tu caso y posteriormente ponernos en contacto contigo para recavar mayor información y enviarte una propuesta de trabajo.",
      btn: "Comienza aquí",
      delay: "animation-delay-100",
    },
    {
      title: "MANOS A LA OBRA",
      subtitle: "Agenda tu cita",
      desc: "Después de recibir la propuesta de trabajo podemos agendar las citas en el horario que mejor te convenga para comenzar a crear resultados.",
      btn: "Agenda",
      delay: "animation-delay-200",
    },
    {
      title: "TIENES DUDAS",
      subtitle: "Contáctanos",
      desc: "Estamos a tus órdenes para resolver cualquier duda.",
      btn: "Llámanos",
      delay: "animation-delay-300",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 grid gap-12 md:grid-cols-3 items-stretch">
        {cards.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between text-center bg-gray-100 animate-fade-up ${item.delay}`}
          >
            <div>
              <h3 className="text-2xl font-extrabold tracking-wide text-gray-900">
                {item.title}
              </h3>
              <h4 className="mt-2 text-lg font-semibold text-gray-800">
                {item.subtitle}
              </h4>
              <p className="mt-3 text-gray-600 leading-relaxed max-w-sm mx-auto">
                {item.desc}
              </p>
            </div>
            <button className="mt-6 bg-black text-white px-8 py-3 rounded-full shadow-md hover:bg-gray-800 transform hover:scale-105 transition-all duration-300">
              {item.btn}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Conducta2;
