import "../styles/Home.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { IconArrowRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Header />
      <main className="home-page">
        <section className="home-section">
          <div className="background"></div>

          <footer data-aos="fade-up" data-aos-duration="1000">
            <h1>
              Viste con confianza,
              <br />
              entrena con pasión
              <br />y alcanza tus metas.
            </h1>
            <button className="btn-productos" onClick={() => navigate("/productos")}>
              Ver Productos <IconArrowRight />
            </button>
          </footer>
        </section>

        <section className="home-section">
          <h2 data-aos="zoom-in-up">FABRICANTES DESDE 1988</h2>
          <div className="categories">
            <article className="category" data-aos="fade-down" data-aos-duration="1000">
              <h3>Camping</h3>
              <p>
                Diseñado para los aventureros que valoran la comodidad y la funcionalidad al aire libre. Ofrecemos una amplia gama de equipos, desde
                carpas y sacos de dormir hasta material de supervivencia, asegurando que tengas todo lo necesario para disfrutar al máximo de la
                naturaleza.
              </p>
            </article>

            <article className="category" data-aos="fade-down" data-aos-duration="1500">
              <h3>Running</h3>
              <p>
                Zapatillas de alto rendimiento, ropa técnica adaptable a cualquier clima, y una variedad de accesorios deportivos como relojes y
                botellas. Todo lo que necesitas para alcanzar tus metas de running, independientemente del terreno o las condiciones.
              </p>
            </article>

            <article className="category" data-aos="fade-down" data-aos-duration="2000">
              <h3>Deportes</h3>
              <p>
                Equipos y accesorios de alta calidad para una variedad de deportes, desde raquetas de tenis y pelotas hasta redes de voleibol. Nos
                enfocamos en ofrecer productos duraderos y versátiles que te ayuden a mantenerte activo y saludable.
              </p>
            </article>
          </div>
        </section>

        <section className="home-section">
          <article data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <h2>¿Quiénes Somos?</h2>
            <p>
              Somos una compañía líder en la venta de equipamientos deportivos. Desde el 1998, trabajamos incansablemente para que nuestros clientes
              puedan encontrar de manera rápida y eficiente, artículos de primer nivel.
              <br /> <br /> Nuestro objetivo es satisfacer las necesidades de los deportistas aficionados, como los de alto rendimiento. Proporcionado
              productos de la mejor calidad, con
              <b> alta resistencia y durabilidad</b>.
            </p>
          </article>
          <div className="image"></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
