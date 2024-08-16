import { IconX } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconMoodSad } from "@tabler/icons-react";
import { useCarritoContext } from "../context/CarritoContext";
import "../styles/Carrito.css";

export function Carrito({ isClose }) {
  const { carrito, removeProduct, increaseQuantity, decreaseQuantity } = useCarritoContext();

  return (
    <div className="overlay">
      <section className="carrito">
        <button className="close-button" onClick={isClose}>
          <IconX size={15} />
        </button>
        <h2>Cart</h2>
        {carrito.length !== 0 ? (
          carrito.map((product) => (
            <CartProduct
              key={product.id_producto}
              name={product.nombre}
              description={product.descripcion}
              price={product.precio * product.cantidad}
              cantidad={product.cantidad}
              remove={() => removeProduct(product.id_producto)}
              increase={() => increaseQuantity(product.id_producto)}
              decrease={() => decreaseQuantity(product.id_producto)}
            />
          ))
        ) : (
          <p className="empty-message">
            Tu carrito esta vacío <br /> <IconMoodSad size={20} />
          </p>
        )}
      </section>
    </div>
  );
}

function CartProduct({ name, description, cantidad, price, remove, increase, decrease }) {
  return (
    <article className="cart-product">
      <section className="product-info">
        <span>
          <h3>{name}</h3>
          <p className="price">${price}</p>
        </span>
        <p>{description}</p>

        <footer>
          <div className="quantity">
            <button onClick={decrease}>-</button>
            <span>{cantidad}</span>
            <button onClick={increase}>+</button>
          </div>

          <button className="remove-btn" onClick={remove}>
            <IconTrash size={15} />
          </button>
        </footer>
      </section>
    </article>
  );
}
