import "../styles/Menu.css";
import { IconX } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

export function Menu({ isClose }) {
  const navigate = useNavigate();

  return (
    <section className="menu-modal">
      <div onClick={() => navigate("/")} className="logo-container">
        <Logo />
      </div>
      <button className="close-btn" onClick={isClose}>
        <IconX size={25} />
      </button>
      <h1>MENU</h1>

      <ul>
        <li onClick={() => navigate("/")}>INICIO</li>
        <li onClick={() => navigate("/productos")}>SHOP</li>
        <li onClick={() => navigate("/carrito")}>CARRITO</li>
        <li onClick={() => navigate("/login")}>INICIAR SESIÓN</li>
      </ul>
    </section>
  );
}
