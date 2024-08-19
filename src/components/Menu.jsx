import "../styles/Menu.css";
import { IconX } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { useAuthContext } from "../context/AuthContext";

export function Menu({ isClose }) {
  const navigate = useNavigate();
  const { user, userInfo, logOut } = useAuthContext();
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
        {userInfo?.id_rol === 1 && <li onClick={() => navigate("/admin")}>MI TIENDA</li>}

        {user ? (
          <li onClick={() => logOut()}>CERRAR SESIÓN</li>
        ) : (
          <>
            <li onClick={() => navigate("/login")}>INICIAR SESIÓN</li> <li onClick={() => navigate("/signup")}>REGISTRARSE</li>
          </>
        )}
      </ul>
    </section>
  );
}
