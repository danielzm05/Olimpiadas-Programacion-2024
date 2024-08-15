import { IconPlus } from "@tabler/icons-react";


export function ProductCard({ name, description, price, img }) {
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