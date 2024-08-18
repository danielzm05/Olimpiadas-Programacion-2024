import { IconTrash } from "@tabler/icons-react";
import "../styles/CartProduct.css";

export function CartProduct({ name, description, cantidad, price, remove, increase, decrease }) {
  return (
    <article className="cart-product">
      <section className="product-info">
        <span>
          <h3 className="name">{name}</h3>
          <p className="price">${price * cantidad}</p>
        </span>
        <p className="description">{description}</p>
      </section>
      <footer>
        <button className="remove-btn" onClick={remove}>
          <IconTrash size={15} />
        </button>
        <div className="quantity">
          <button onClick={decrease}>-</button>
          <span>{cantidad}</span>
          <button onClick={increase}>+</button>
        </div>
      </footer>
    </article>
  );
}
