import { IconMoodSad } from "@tabler/icons-react";
import { IconArrowRight } from "@tabler/icons-react";
import { CartProduct } from "./CartProduct";
import { useCarritoContext } from "../context/CarritoContext";
import "../styles/Carrito.css";

function Cart() {
  const { carrito, removeProduct, increaseQuantity, decreaseQuantity } = useCarritoContext();
  const subtotal = carrito.reduce((total, product) => {
    return total + product.precio * product.cantidad;
  }, 0);

  const envio = subtotal * 0.01;
  const total = subtotal + envio;

  return (
    <section className="cart">
      <header>
        <h2>Cart</h2>
      </header>

      <section className="products-container">
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

      <footer className="cart-footer">
        <span className="cart-info">
          <h3>Subtotal</h3>
          <p>${subtotal}</p>
        </span>
        <span className="cart-info">
          <h3>Envío</h3>
          <p>${subtotal * 0.01}</p>
        </span>
        <span className="cart-info total">
          <h3>Total</h3>
          <p>${total}</p>
        </span>
        <button className="btn-purchase">
          Comprar <IconArrowRight size={20} />
        </button>
      </footer>
    </section>
  );
}

export default Cart;
