import { IconUser } from "@tabler/icons-react";
import { IconShoppingBag } from "@tabler/icons-react";
import { IconMenu2 } from "@tabler/icons-react";
import { Carrito } from "./Carrito";
import { Menu } from "./Menu";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/Header.css";
import { useState } from "react";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="main-header">
      <div className="burger-container">
        <IconMenu2 onClick={() => setOpenMenu(true)} size={30} />
      </div>

      <img onClick={() => navigate("/")} src={logo} className="logo" alt="Logo" />

      <nav>
        <ul>
          <li>
            <a onClick={() => navigate("/login")}>
              <IconUser size={30} />
            </a>
          </li>
          <li onClick={() => setOpenCart(true)}>
            <a href="#">
              <IconShoppingBag size={30} />
            </a>
          </li>
        </ul>
      </nav>

      {openCart && <Carrito isClose={() => setOpenCart(false)} />}
      {openMenu && <Menu isClose={() => setOpenMenu(false)} />}
    </header>
  );
}
