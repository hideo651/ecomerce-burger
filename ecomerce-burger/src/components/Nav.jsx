import style from "./Nav.module.css";
import produtos from "../Database/Database";
import carrrinho from "../assets/search.png";
import React from "react";
import { GlobalContext } from "../context/GlobalContext";

const Nav = () => {
  const { dados, setDados, product, setProduct } =
    React.useContext(GlobalContext);

  if (!dados.length) return null;

  function handleClick(nome) {
    if (nome === "todos") {
      setProduct(dados);
    } else {
      const filtrado = dados.filter((item) => {
        return item.secao === nome;
      });
      setProduct(filtrado);
    }
  }

  return (
    <>
      <nav>
        <ul>
          <li className={style.btnNav}>
            <button onClick={() => handleClick("todos")}>Todos produtos</button>
          </li>
          <li className={style.btnNav}>
            <button onClick={() => handleClick("Hortifruti")}>
              Hortifruti
            </button>
          </li>
          <li className={style.btnNav}>
            <button onClick={() => handleClick("Panificadora")}>
              Panificadora
            </button>
          </li>
          <li className={style.btnNav}>
            <button onClick={() => handleClick("Laticínio")}>Laticínio</button>
          </li>
        </ul>
        <form>
          <input
            type="text"
            placeholder="Pesquisar por"
            onChange={(event) => console.log(event.target.value)}
          />
          <button className={style.btnEnviar}>
            <img src={carrrinho} alt="" srcSet="" />
          </button>
        </form>
      </nav>
    </>
  );
};

export default Nav;
