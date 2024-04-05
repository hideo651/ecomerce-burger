import style from "./Nav.module.css";
import produtos from "../Database/Database";
import carrrinho from "../../public/search.png";
import React from "react";
import { GlobalContext } from "../context/GlobalContext";

const Nav = () => {
  const [search, setSearch] = React.useState(null);
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

  function pesquisa() {
    const filtrado = dados.filter((item) => {
      return item.secao.toLowerCase() === search.toLowerCase();
    });

    if (filtrado.length) {
      setProduct(filtrado);
    } else {
      const filtrado = dados.filter((item) => {
        return item.nome.toLowerCase() === search.toLowerCase();
      });
      setProduct(filtrado);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    pesquisa();
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Pesquisar por"
            onChange={(event) => setSearch(event.target.value)}
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
