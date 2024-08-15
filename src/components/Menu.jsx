import "../styles/Menu.css";
import { IconX } from "@tabler/icons-react";
import logo from "../img/logo.png";

export function Menu({ isClose }) {
  return (
    <section className="menu-modal">
      <img src={logo} alt="Sport-fit Logo" />
      <button className="close-btn" onClick={isClose}>
        <IconX size={25} />
      </button>
      <h1>MENU</h1>

      <nav>
        <ul>
          <li>
            <a href="/">INICIO</a>
          </li>
          <li>
            <a href="/productos">SHOP</a>
          </li>
          <li>
            <a href="/login">INICIAR SESIÓN</a>
          </li>
          <li>
            <a href="/nosotros">SOBRE NOSOTROS</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
