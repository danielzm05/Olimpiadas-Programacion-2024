import { IconTrash } from "@tabler/icons-react";
import "../styles/CartProduct.css";

export function CartProduct({ name, img, description, cantidad, price, remove, increase, decrease }) {
  return (
    <article className="cart-product">
      <div className="product-img" style={{ backgroundImage: `url(${img})` }}></div>
      <section className="product-info">
        <span>
          <h3 className="name">{name}</h3>
          <p className="price">${price * cantidad}</p>
        </span>
        <p className="description">{description}</p>

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
      </section>
    </article>
  );
}
