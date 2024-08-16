import "../styles/Menu.css";
import { IconX } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";

export function Menu({ isClose }) {
  const navigate = useNavigate();

  return (
    <section className="menu-modal">
      <img src={logo} alt="Sport-fit Logo" />
      <button className="close-btn" onClick={isClose}>
        <IconX size={25} />
      </button>
      <h1>MENU</h1>

      <ul>
        <li onClick={() => navigate("/")}>
          <a href="/">INICIO</a>
        </li>
        <li onClick={() => navigate("/productos")}>
          <a href="/productos">SHOP</a>
        </li>
        <li onClick={() => navigate("/login")}>
          <a href="/login">INICIAR SESIÓN</a>
        </li>
      </ul>
    </section>
  );
}
