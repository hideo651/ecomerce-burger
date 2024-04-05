import React from "react";
import produtos from "../Database/Database";
import alert from "../assets/alert-circle.png";
import style from "../components/Produtos.module.css";
import CardProduto from "./CardProduto/CardProduto";
import { GlobalContext } from "../context/GlobalContext";
import Carrinho from "./Carrinho/Carrinho";

const Produtos = () => {
  const { dados, setDados, carrinho, setCarrinho, setProduct, product } =
    React.useContext(GlobalContext);

  const valorTotal = carrinho
    .map((item) => item.valorTotal)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  const quantidadeTotal = carrinho
    .map((item) => item.quantidade)
    .reduce((a, b) => a + b, 0);

  const soma = product
    .map((valor) => Number(valor.preco))
    .reduce((a, b) => a + b, 0);

  return (
    <>
      <div className={`${`container`} ${style.infoSoma}`}>
        <div className={style.infoAlter}>
          <img src={alert} alt="" />
          <span>Valor total dos produtos da sessão selecionada</span>
        </div>
        <div>
          <span className={style.valorTotal}>R$ {soma}.00</span>
        </div>
      </div>
      <section className={`${`container`} ${style.section}`}>
        <ul>
          {product.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </ul>
        <div className={style.carrinho}>
          <Carrinho />
          {carrinho.length ? (
            <div>
              <div className={style.bagTotal}>
                <h2>Quantidade:</h2>
                <span>{quantidadeTotal}</span>
              </div>
              <div className={style.bagTotal}>
                <h2>Total:</h2>
                <span>R$ {valorTotal}</span>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
};

export default Produtos;
