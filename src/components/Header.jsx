import { Menu } from "./Menu";
import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { IconBuildingStore, IconShoppingCart, IconShirt, IconLogout, IconMenu2, IconShoppingBag, IconUser } from "@tabler/icons-react";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import "../styles/Header.css";

export function Header({ dark = false }) {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, userInfo, logOut } = useAuthContext();
  const navigate = useNavigate();

  return (
    <header className={dark ? "dark-theme main-header" : "main-header"}>
      <div className="burger-container">
        <IconMenu2 onClick={() => setOpenMenu(true)} />
      </div>

      <div onClick={() => navigate("/")} className="logo-container">
        <Logo />
      </div>
      <nav>
        <ul>
          {user ? (
            <>
              <li title="Cerrar Sesión">
                <a onClick={() => logOut()}>
                  <IconLogout stroke={1.75} />
                </a>
              </li>

              <li title="Carrito">
                <a onClick={() => navigate("/carrito")}>
                  <IconShoppingCart stroke={1.75} />
                </a>
              </li>

              <li title="Mis Compras">
                <a onClick={() => navigate("/compras")}>
                  <IconShoppingBag stroke={1.75} />
                </a>
              </li>
            </>
          ) : (
            <li title="Iniciar Sesión">
              <a onClick={() => navigate("/login")}>
                <IconUser stroke={1.75} />
              </a>
            </li>
          )}
          <li title="Productos">
            <a onClick={() => navigate("/productos")}>
              <IconShirt stroke={1.75} />
            </a>
          </li>
          {userInfo?.id_rol === 1 ? (
            <li>
              <a onClick={() => navigate("/admin")} title="Tienda">
                <IconBuildingStore stroke={1.75} />
              </a>
            </li>
          ) : null}
        </ul>
      </nav>

      {openMenu && <Menu isClose={() => setOpenMenu(false)} />}
    </header>
  );
}
