import React from "react";
import { GlobalContext } from "../../context/GlobalContext";
import bag from "../../../public/shopping-bag.png";
import cart from "../../../public/carrinho.png";
import trash from "../../../public/trash.png";
import style from "./Carrinho.module.css";

const Carrinho = () => {
  const { dados, setDados, carrinho, setCarrinho } =
    React.useContext(GlobalContext);

  function handleClick(id) {
    const itemId = Number(id);

    const findProduct = carrinho.find((item) => item.id === itemId);

    if (findProduct) {
      if (findProduct.quantidade > 1) {
        const updateCarrinho = carrinho.map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              quantidade: item.quantidade - 1,
              valorTotal: item.valorTotal - item.preco,
            };
          }
          return item;
        });
        setCarrinho(updateCarrinho);
      } else {
        const newCart = carrinho.filter((item) => item.id !== itemId);
        setCarrinho(newCart);
      }
    }
  }

  return (
    <>
      <div className={style.carrinhoTitulo}>
        <img src={cart} alt="" />

        <h2>Carrinho</h2>
      </div>
      {carrinho.length ? (
        <div className={style.bagContent}>
          <ul className={style.bagItens}>
            {carrinho.map((item) => (
              <li key={item.id}>
                <div className={style.content}>
                  <img src={item.img} alt="" />
                  <div className={style.bagInfo}>
                    <h2>{item.nome}</h2>
                    <span>{item.secao}</span>
                    <p>R$: {item.valorTotal}</p>
                    <p>Quantidade: {item.quantidade}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleClick(item.id)}
                  className={style.btnDelete}
                >
                  <img src={trash} alt="" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={style.cart}>
          <img src={bag} alt="" />
          <h2>Por enquanto não temos produtos no carrinho</h2>
        </div>
      )}
    </>
  );
};

export default Carrinho;
