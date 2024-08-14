import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import "../styles/Footer.css";

export function Footer() {
  return (
    <footer className="main-footer">
      <img className="footer-logo" src="https://allmusic-arg.netlify.app/assets/img/LOGO.png" alt="Logo" />
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
