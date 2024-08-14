import { IconUser } from "@tabler/icons-react";
import { IconShoppingBag } from "@tabler/icons-react";
import { IconMenu2 } from "@tabler/icons-react";
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
      <h1>LOGO</h1>
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
