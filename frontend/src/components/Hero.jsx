import React from "react";
import { assets } from "../assets/frontend_assets/assets.js";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center px-6 py-8 sm:px-10 sm:py-0">
        <div className="text-[#414141] max-w-lg">
          <p className="font-medium text-sm sm:text-base leading-relaxed">
            Acreditamos em um mundo melhor. Valorizamos a beleza do que já viveu, apostamos no reuso com propósito e caminhamos na direção oposta da moda descartável. Nosso brechó é um convite ao consumo com alma — onde peças carregam histórias.
          </p>
          <br />
          <p className="font-medium text-sm sm:text-base leading-relaxed">De peças novas com etiqueta a relíquias estilosas, descubra tesouros que fazem a diferença!</p>
          <h1 className="prata-regular text-2xl sm:text-3xl leading-relaxed mt-5">
            — Bem-vinda à Loja Marô!
          </h1>
        </div>
      </div>

      {/* right side */}
      <div className="w-full sm:w-1/2">
        <img className="w-full h-full object-cover" src={assets.hero_img} alt="Imagem hero" />
      </div>
    </div>
  );
};

export default Hero;
