import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/Footer.css";

export function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="main-footer">
      <img className="footer-logo" onClick={() => navigate("/")} src={logo} alt="Logo" />
      <ul>
        <li>
          <IconBrandInstagram size={30} />
        </li>
        <li>
          <IconBrandWhatsapp size={30} />
        </li>
        <li>
          <IconMail size={30} />
        </li>
      </ul>
    </footer>
  );
}
