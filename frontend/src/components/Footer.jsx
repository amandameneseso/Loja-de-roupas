import React from "react";
import { assets } from "../assets/frontend_assets/assets.js";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">LOJA MARÔ</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>Sobre nós</li>
            <li>Política de entrega</li>
            <li>Política de privacidade</li>
          </ul>
        </div>

        <div>
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
