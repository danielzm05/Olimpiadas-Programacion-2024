import { IconPlus } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
import "../styles/ProductCard.css";

export function ProductCard({ name, img, description, price, addToCart, edit = false, remove }) {
  return (
    <article className="product-card">
      {edit && (
        <div onClick={remove} className="btn-delete">
          <IconX size={18} />
        </div>
      )}
      <div className="product-img" style={{ backgroundImage: `url(${img})` }}></div>
      <section>
        <h3>{name}</h3>
        <p className="product-description">{description}</p>
      </section>
      <footer>
        <p className="product-price">${price}</p>
        <button className="btn-add" onClick={addToCart}>
          <IconPlus size={18} />
          Agregar
        </button>
      </footer>
    </article>
  );
}
