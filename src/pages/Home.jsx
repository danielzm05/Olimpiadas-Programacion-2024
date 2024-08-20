import "../styles/Home.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { IconArrowRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main className="home-page">
        <section className="home-section">
          <div className="background"></div>

          <footer>
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
          <h2>FABRICANTES DESDE 1988</h2>
          <div className="categories">
            <article className="category">
              <h3>Camping</h3>
              <p>
                Diseñada para aventureros que buscan comodidad y funcionalidad al aire libre. Ofrecemos carpas, sacos de dormir, material de
                supervivencia y todo lo necesario para disfrutar de la naturaleza.
              </p>
            </article>

            <article className="category">
              <h3>Running</h3>
              <p>Zapatillas de alta calidad, ropa que se adapta a cualquier clima, relojes deportivos, botellas y todo tipo de accesorios.</p>
            </article>

            <article className="category">
              <h3>Sporting</h3>
              <p>
                Raquetas de tenis, pelotas y redes de voley. Nuestra selección de material deportivo es amplia y versátil. Esforzándonos por
                proporcionar productos duraderos y funcionales que ayuden a las personas a mantenerse activas y saludables.
              </p>
            </article>
          </div>
        </section>

        <section className="home-section">
          <article>
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
