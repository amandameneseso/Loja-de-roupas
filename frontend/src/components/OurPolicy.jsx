import React from "react";
import { assets } from "../assets/frontend_assets/assets.js";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-y-10 sm:gap-x-8 lg:gap-x-12 text-center py-10 sm:py-16 md:py-20 sm:text-sm md:text-base text-gray-700 max-w-6xl mx-auto px-4">
      {/* Item 1 */}
      <div className="flex flex-col items-center flex-1 min-w-[200px] max-w-xs mx-auto">
        <img src={assets.exchange_icon} className="w-12 h-12 object-contain m-auto mb-5" alt="" />
        <p className="font-semibold text-gray-800 mb-2">Consumo sustentável</p> {/* Cor mais escura para destaque */}
        <p className='text-gray-600 leading-relaxed'>Moda com propósito é mais do que tendência: é atitude. Escolha peças incríveis, reduza o impacto ambiental; seu look fica lindo — nós agradecemos e o planeta também.</p> {/* Cor mais escura e espaçamento de linha */}
      </div>

      {/* Item 2 */}
      <div className="flex flex-col items-center flex-1 min-w-[200px] max-w-xs mx-auto">
        <img src={assets.quality_icon} className="w-12 h-12 object-contain mx-auto mb-5" alt="" />
        <p className="font-semibold text-gray-800 mb-2">Achadinhos exclusivos</p>
        <p className='text-gray-600 leading-relaxed'>De peças novas com etiqueta a relíquias estilosas, aqui você encontra aquela peça única que só a Loja Marô tem.</p>
      </div>

      {/* Item 3 */}
      <div className="flex flex-col items-center flex-1 min-w-[200px] max-w-xs mx-auto">
        <img src={assets.support_img} className="w-12 h-12 object-contain m-auto mb-5" alt="" />
        <p className="font-semibold text-gray-800 mb-2">Compre online, do seu jeito</p>
        <p className='text-gray-600 leading-relaxed'>Garimpe sem sair de casa, com conforto, segurança e rapidez na Loja Marô. Encontre as tendências que você ama e a exclusividade do second hand em um só lugar!</p>
      </div>
    </div>
  );
};

export default OurPolicy;
