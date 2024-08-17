import { IconUser } from "@tabler/icons-react";
import { IconShoppingBag } from "@tabler/icons-react";
import { IconMenu2 } from "@tabler/icons-react";
import { IconLogout } from "@tabler/icons-react";
import { Menu } from "./Menu";
import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import "../styles/Header.css";

export function Header({ dark = false }) {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, logOut } = useAuthContext();
  const navigate = useNavigate();

  return (
    <header className={dark ? "dark-theme main-header" : "main-header"}>
      <div className="burger-container">
        <IconMenu2 onClick={() => setOpenMenu(true)} size={30} />
      </div>

      <div onClick={() => navigate("/")} className="logo-container">
        <Logo />
      </div>
      <nav>
        <ul>
          {user ? (
            <li>
              <a onClick={() => logOut()}>
                <IconLogout size={30} />
              </a>
            </li>
          ) : (
            <li>
              <a onClick={() => navigate("/login")}>
                <IconUser size={30} />
              </a>
            </li>
          )}

          <li>
            <a onClick={() => navigate("/carrito")}>
              <IconShoppingBag size={30} />
            </a>
          </li>
        </ul>
      </nav>

      {openMenu && <Menu isClose={() => setOpenMenu(false)} />}
    </header>
  );
}
