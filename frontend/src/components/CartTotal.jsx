import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const subtotal = getCartAmount();
  const currentDeliveryFee = subtotal === 0 ? 0 : delivery_fee;
  const total = subtotal === 0 ? 0 : subtotal + currentDeliveryFee;

  // Função auxiliar para formatar valores monetários
  const formatCurrency = (amount) => {
    const numAmount = Number(amount);
    if (isNaN(numAmount)) {
      return "0,00"; // Retorna um valor padrão formatado se não for um número válido
    }
    return numAmount.toLocaleString('pt-BR', {
      minimumFractionDigits: 2, // Garante que sempre terá pelo menos 2 casas decimais
      maximumFractionDigits: 2, // Garante que sempre terá no máximo 2 casas decimais
      useGrouping: true, // Adiciona separadores de milhares (pontos)
    });
  };

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"TOTAL DO"} text2={"CARRINHO"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{currency} {formatCurrency(subtotal)}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <p>Frete</p>
            <p>{currency} {formatCurrency(currentDeliveryFee)}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <b>Total</b>
            <b>{currency} {formatCurrency(total)}</b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
