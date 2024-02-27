/* eslint-disable react/prop-types */
import React from "react";
import style from "./CardProduto.module.css";
import { GlobalContext } from "../../context/GlobalContext";

const CardProduto = ({ produto }) => {
  const { dados, carrinho, setCarrinho } = React.useContext(GlobalContext);

  function handleClick(id) {
    const itemId = Number(id);
    const itemInCart = carrinho.find((item) => item.id === itemId);

    if (!itemInCart) {
      const bag = dados.find((item) => item.id === itemId);
      setCarrinho([
        ...carrinho,
        {
          nome: bag.nome,
          id: bag.id,
          secao: bag.secao,
          img: bag.img,
          preco: bag.preco,
          quantidade: 1,
          valorTotal: Number(bag.preco),
        },
      ]);
    } else {
      const updatedCarrinho = carrinho.map((item, index) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantidade: item.quantidade + 1,
            valorTotal: (item.quantidade + 1) * item.preco,
          };
        }
        return item;
      });
      setCarrinho(updatedCarrinho);
    }
  }

  return (
    <>
      <li className={style.cardProduto}>
        <div>
          <img src={produto.img} alt="" />
        </div>
        <div className={style.estruturaCard}>
          <div className={style.infoCard}>
            <h2>{produto.nome}</h2>
            <span>{produto.secao}</span>
            <p>R$ {produto.preco}</p>
          </div>
          <button onClick={() => handleClick(`${produto.id}`)}>Comprar</button>
        </div>
      </li>
    </>
  );
};

export default CardProduto;
