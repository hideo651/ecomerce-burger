import style from "./Nav.module.css";
import produtos from "../Database/Database";
import carrrinho from "../assets/search.png";

function handleClick(nome) {
  console.log(nome);
}

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleClick("todos")}>Todos produtos</button>
          </li>
          <li>
            <button onClick={() => handleClick("Hortifruti")}>
              Hortifruti
            </button>
          </li>
          <li>
            <button onClick={() => handleClick("Panificadora")}>
              Panificadora
            </button>
          </li>
          <li>
            <button onClick={() => handleClick("Laticinios")}>
              Laticinios
            </button>
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
