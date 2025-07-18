// Contact.jsx
import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets.js";
import NewsletterBox from "../components/NewsletterBox.jsx";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"ENTRE EM"} text2={"CONTATO"} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Nossa loja</p>
          <p className='text-gray-500'>Rua azul, 123</p>
          <p className='font-semibold text-xl text-gray-600'>Atendimento</p>
          <p className='text-gray-500'>Telefone: (xx) xxxxx-xxxx <br /> E-mail: contato@lojamaro.com</p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
