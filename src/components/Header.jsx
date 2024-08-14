import { IconUser } from "@tabler/icons-react";
import { IconShoppingBag } from "@tabler/icons-react";
import { IconMenu2 } from "@tabler/icons-react";
import logo from "../img/logo.png";
import "../styles/Header.css";

export function Header() {
  return (
    <header className="main-header">
      <ul>
        <li>
          <IconMenu2 size={30} />
          Menu
        </li>
      </ul>
      <img className="logo" src={logo} alt="Logo" />

      <ul>
        <li>
          <IconUser size={30} />
        </li>
        <li>
          <IconShoppingBag size={30} />
        </li>
      </ul>
    </header>
  );
}
