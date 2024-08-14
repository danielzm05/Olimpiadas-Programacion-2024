import { IconPlus } from "@tabler/icons-react";
import "../styles/Products.css";
export function Products() {
  return (
    <main className="products-page">
      <h2>NUESTROS PRODUCTOS</h2>
      <div className="products-container">
        <article className="product-card">
          <div className="product-img" style={{ backgroundImage: `url("https://allmusic-arg.netlify.app/assets/img/bass_fender.jpg.webp")` }}></div>
          <section>
            <h3>Micrófono</h3>
            <p className="product-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut tenetur odio. Alias qui excepturi nobis accusantium suscipit, ipsam quas
            </p>
          </section>
          <footer>
            <p className="product-price">$20000</p>
            <button className="btn-add">
              <IconPlus size={18} />
              Agregar
            </button>
          </footer>
        </article>
        <article className="product-card">
          <div
            className="product-img"
            style={{ backgroundImage: `url("https://allmusic-arg.netlify.app/assets/img/guitarra_takamine_acus.png")` }}
          ></div>
          <section>
            <h3>Micrófono</h3>
            <p className="product-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut tenetur odio. Alias qui excepturi nobis accusantium suscipit, ipsam quas
            </p>
          </section>
          <footer>
            <p className="product-price">$20000</p>
            <button className="btn-add">
              <IconPlus size={18} />
              Agregar
            </button>
          </footer>
        </article>
      </div>
    </main>
  );
}
