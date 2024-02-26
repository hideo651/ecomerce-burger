import style from "./Nav.module.css";
import produtos from "../Database/Database";
import carrrinho from "../assets/search.png";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <button>Todos produtos</button>
          </li>
          <li>
            <button>Hortifruti</button>
          </li>
          <li>
            <button>Panificadora</button>
          </li>
          <li>
            <button>Laticinios</button>
          </li>
        </ul>
        <form>
          <input type="text" placeholder="Pesquisar por" />
          <button className={style.btnEnviar}>
            <img src={carrrinho} alt="" srcSet="" />
          </button>
        </form>
      </nav>
    </>
  );
};

export default Nav;
