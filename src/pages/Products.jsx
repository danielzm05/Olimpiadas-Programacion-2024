import { IconPlus } from "@tabler/icons-react";
import "../styles/Products.css";

export function Products() {
  return (
    <main className="products-page">
      <h2>NUESTROS PRODUCTOS</h2>
      <div className="products-container">
        <ProductCard
          name={"Guitarra"}
          description={"weofnwnefiweif"}
          price={20000}
          img={"https://allmusic-arg.netlify.app/assets/img/guitarra_takamine_acus.png"}
        />
      </div>
    </main>
  );
}

function ProductCard({ name, description, price, img }) {
  return (
    <article className="product-card">
      <div className="product-img" style={{ backgroundImage: `url(${img})` }}></div>
      <section>
        <h3>{name}</h3>
        <p className="product-description">{description}</p>
      </section>
      <footer>
        <p className="product-price">${price}</p>
        <button className="btn-add">
          <IconPlus size={18} />
          Agregar
        </button>
      </footer>
    </article>
  );
}
