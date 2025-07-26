import React from "react";
import { assets } from "../assets/frontend_assets/assets.js";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[0.5fr_1fr_2fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="mx-auto">
          <img src={assets.logo} className="mb-5 w-32" alt="" />
        </div>

          <p className="w-full md:w-2/3 text-gray-600">
            A Loja Marô é um brechó online que oferece algo que vai muito além de uma peça que já foi de outra pessoa: é um estilo autoral e exclusivo, aliado à consciência ambiental.
          </p>

        <div className="mx-auto text-center">
          <p className="text-xl font-medium mb-5">LOJA MARÔ</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>Sobre nós</li>
            <li>Política de entrega</li>
            <li>Política de privacidade</li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-xl font-medium mb-5">SUPORTE</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>(xx) xxxxx-xxxx</li>
            <li>contato@lojamaro.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          © 2025 LOJA MARÔ
        </p>
      </div>
    </div>
  );
};

export default Footer;
