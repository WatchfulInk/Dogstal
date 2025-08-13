import React from "react";

function Banner() {
  return (
    <div className="w-full bg-white py-6 flex items-center justify-center mt-20">
      {/* Contenedor principal */}
      <div className="flex flex-wrap items-center justify-center gap-4 max-w-6xl px-4">
        {/* Escudo */}
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/YyvZoxW9MRc7bKy0/escudo-proanimal-academy-A1aBKpjo5nHeXxll.png"
          alt="Escudo Pro Animal Academy"
          className="h-48 w-auto object-contain"
        />

        {/* Texto central */}
        <div className="text-center md:text-left">
          <span
            className="font-bold text-red-600"
            style={{ fontSize: "2rem", fontFamily: "Arial, sans-serif" }}
          >
            PRO
          </span>{" "}
          <span
            className="font-bold text-black"
            style={{ fontSize: "2rem", fontFamily: "Arial, sans-serif" }}
          >
            ANIMAL
          </span>
          <br />
          <span
            className="text-gray-700"
            style={{
              fontSize: "1.5rem",
              letterSpacing: "4px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            ACADEMY
          </span>
        </div>

        {/* Logo IAABC */}
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=382,h=184,fit=crop/YyvZoxW9MRc7bKy0/iaabc_web_acreditado-AR0MWkNZbwhBzoKZ.png"
          alt="IAABC Logo"
          className="h-15 w-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Banner;
