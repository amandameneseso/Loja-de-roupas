import React from "react";
import { assets } from "../assets/admin_assets/assets.js";

const Add = () => {
  return (
    <form className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">Carregar imagem</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <p>Imagem 1</p>
            <img className="w-20 cursor-pointer" src={assets.upload_area} alt="" />
            <input type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <p>Imagem 2</p>
            <img className="w-20 cursor-pointer" src={assets.upload_area} alt="" />
            <input type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <p>Imagem 3</p>
            <img className="w-20 cursor-pointer" src={assets.upload_area} alt="" />
            <input type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <p>Imagem 4</p>
            <img className="w-20 cursor-pointer" src={assets.upload_area} alt="" />
            <input type="file" id="image4" hidden />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Nome do produto</p>
        <input className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Nome" required />
      </div>

      <div className="w-full">
        <p className="mb-2">Descrição do produto</p>
        <textarea className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Insira o conteúdo aqui" required />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Categoria</p>
          <select className="w-full px-3 py-2">
            <option value="Men">Masculino</option>
            <option value="Women">Feminino</option>
            <option value="Kids">Infantil</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Subcategoria (tipo)</p>
          <select className="w-full px-3 py-2">
            <option value="Topwear">Camisas/vestidos</option>
            <option value="Bottomwear">Calças/saias</option>
            <option value="Winterwear">Roupas de inverno</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Preço</p>
          <input className="w-full px-3 py-1.5 sm:w-[150px]" type="Number" />
        </div>
      </div>

      <div>
        <p className="mb-2">Tamanhos</p>
        <div className="flex gap-3">
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">S</p>
          </div>

          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">M</p>
          </div>

          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">L</p>
          </div>

          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">XL</p>
          </div>

          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">XXL</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input type="checkbox" id="bestseller" />
        <label className="cursor-pointer" htmlFor="bestseller">Adicionar aos mais vendidos</label>
      </div>
      
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">Adicionar</button>
    </form>
  );
};

export default Add;
