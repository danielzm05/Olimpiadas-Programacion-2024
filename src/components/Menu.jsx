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
        <li onClick={() => navigate("/")}>INICIO</li>
        <li onClick={() => navigate("/productos")}>SHOP</li>
        <li onClick={() => navigate("/login")}>INICIAR SESIÓN</li>
      </ul>
    </section>
  );
}
