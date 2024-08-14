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
      <ul>
        <li>INICIO</li>
        <li>SHOP</li>
        <li>SOBRE NOSOTROS</li>
      </ul>
    </section>
  );
}
