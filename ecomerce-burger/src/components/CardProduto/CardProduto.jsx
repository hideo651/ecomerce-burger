/* eslint-disable react/prop-types */
import style from "./CardProduto.module.css";

const CardProduto = ({ produto, carrinho, setCarrinho }) => {
  function handleClick(id) {
    setCarrinho([...carrinho, id]);
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
