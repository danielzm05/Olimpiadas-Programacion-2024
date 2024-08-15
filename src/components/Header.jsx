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
      <ul>
        <li onClick={() => setOpenMenu(true)}>
          <IconMenu2 size={30} />
          Menu
        </li>
      </ul>
      <img className="logo" src={logo} alt="Logo" />

      <ul>
        <li>
          <IconUser size={30} />
        </li>
        <li onClick={() => setOpenCart(true)}>
          <IconShoppingBag size={30} />
        </li>
      </ul>

      {openCart && <Carrito isClose={() => setOpenCart(false)} />}
      {openMenu && <Menu isClose={() => setOpenMenu(false)} />}
    </header>
  );
}
