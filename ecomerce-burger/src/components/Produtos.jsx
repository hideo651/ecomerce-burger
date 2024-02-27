import React from "react";
import produtos from "../Database/Database";
import alert from "../assets/alert-circle.png";
import style from "../components/Produtos.module.css";
import CardProduto from "./CardProduto/CardProduto";
import { GlobalContext } from "../context/GlobalContext";
import Carrinho from "./Carrinho/Carrinho";

const Produtos = () => {
  const { dados, setDados, carrinho, setCarrinho } =
    React.useContext(GlobalContext);

  const soma = produtos
    .map((valor) => Number(valor.preco))
    .reduce((a, b) => a + b, 0);

  React.useEffect(() => {
    setDados(produtos);
  }, []);

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
          {dados.map((produto) => (
            <CardProduto
              key={produto.id}
              produto={produto}
              setCarrinho={setCarrinho}
              carrinho={carrinho}
            />
          ))}
        </ul>
        <div className={style.carrinho}>
          <Carrinho />
        </div>
      </section>
    </>
  );
};

export default Produtos;
