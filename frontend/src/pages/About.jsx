import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets.js";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"SOBRE"} text2={"NÓS"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px] shadow-md' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p>A Loja Marô atua para ressignificar a cultura de consumo e gerar impacto positivo, fomentando a Moda Circular e democratizando o acesso a marcas nacionais e importadas a todas as classes sociais. </p>
            <p>Acreditamos que as roupas mais sustentáveis são aquelas que já existem, por isso promovemos a compra e a venda de roupas usadas em ótimo estado. Com uma curadoria inteligente e responsável, nossa seleção é especializada em peças second hand e também em itens novos, com qualidade e de marcas nacionais e importadas.</p>
            <b className="text-gray-800">Nossa missão</b>
            <p>Nossa missão na Loja Marô é revolucionar a forma como as pessoas consomem moda, oferecendo uma plataforma acessível e inspiradora para o comércio de roupas, tanto de primeira quanto de segunda mão. Buscamos promover a economia circular, incentivando a reutilização de peças de qualidade e a criação de um estilo autêntico e consciente para todos.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={"POR QUE NOS"} text2={"ESCOLHER?"} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Garantia de qualidade:</b>
            <p className='text-gray-600'>Selecionamos e verificamos meticulosamente cada produto para garantir que ele atenda aos nossos rigorosos padrões de qualidade.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Conveniência:</b>
            <p className='text-gray-600'>Com nossa interface amigável e processo de pedido descomplicado, fazer compras nunca foi tão fácil.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Atendimento ao cliente:</b>
            <p className='text-gray-600'>Nossa equipe de profissionais dedicados está aqui para ajudá-lo, garantindo que sua satisfação seja nossa maior prioridade.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
