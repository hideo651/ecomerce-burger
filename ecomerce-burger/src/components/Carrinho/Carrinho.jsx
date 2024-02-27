import React from "react";
import { GlobalContext } from "../../context/GlobalContext";
import bag from "../../assets/shopping-bag.png";
import cart from "../../assets/carrinho.png";
import style from "./Carrinho.module.css";

const Carrinho = () => {
  const { dados, setDados, carrinho } = React.useContext(GlobalContext);

  console.log(carrinho.length);

  return (
    <>
      <div className={style.carrinhoTitulo}>
        <img src={cart} alt="" />

        <h2>Carrinho</h2>
      </div>
      {carrinho.length ? (
        <div>
          <h1>Temos produtos</h1>
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
