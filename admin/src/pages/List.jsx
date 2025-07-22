import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({token}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + "/api/product/remove", {id}, {headers: {token}});
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
  <>
    <p className="mb-2 font-semibold text-gray-800">Todos os produtos</p>
    <div className="flex flex-col gap-2">
      {/* Títulos da tabela */}
      <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
        <b>Imagem</b>
        <b>Nome</b>
        <b>Categoria</b>
        <b>Preço</b>
        <b className="text-center">Remover</b>
      </div>

      {/* Itens da tabela */}
      {list.map((item, index) => (
        <div className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-3 px-4 mb-[-8px] border-b border-gray-200 text-sm text-gray-700" key={index}>
          <img className="w-16" src={item.image[0]} alt="" />
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>{currency}{item.price}</p>
          <p onClick={()=>removeProduct(item._id)} className="text-center cursor-pointer text-red-500 hover:text-red-700 text-lg">&#x2715;</p>
        </div>
      ))}
    </div>
  </>
  );
};

export default List;
