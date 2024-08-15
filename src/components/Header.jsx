import { IconUser } from "@tabler/icons-react";
import { IconShoppingBag } from "@tabler/icons-react";
import { IconMenu2 } from "@tabler/icons-react";
import { Carrito } from "./Carrito";
import { Menu } from "./Menu";
import logo from "../img/logo.png";
import "../styles/Header.css";
import { useState } from "react";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  return (
    <header className="main-header">
      <a href="#" onClick={() => setOpenMenu(true)}>
        <IconMenu2 size={30} />
      </a>
      <a href="/">
        <img className="logo" src={logo} alt="Logo" />
      </a>

      <nav>
        <ul>
          <li>
            <a href="/login">
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
