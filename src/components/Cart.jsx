import { IconMoodSad } from "@tabler/icons-react";
import { IconArrowRight } from "@tabler/icons-react";
import { CartProduct } from "./CartProduct";
import { useEffect } from "react";
import { useCarritoContext } from "../context/CarritoContext";
import { useProductsContext } from "../context/ProductsContext";
import "../styles/Carrito.css";

function Cart() {
  const { cart, getCart, removeProduct, updateQuantity } = useCarritoContext();
  const { makeSale } = useProductsContext();
  useEffect(() => {
    getCart();
  }, []);

  const subtotal = cart.reduce((total, product) => {
    const precio = product.Producto.precio || 0;
    const cantidad = product.cantidad || 0;
    return total + precio * cantidad;
  }, 0);

  const envio = Math.trunc(subtotal * 0.02);
  const total = Math.trunc(subtotal + envio);

  return (
    <section className="cart">
      <header>
        <h2>Cart</h2>
      </header>

      <section className="products-container">
        {cart.length !== 0 ? (
          cart.map((product) => (
            <CartProduct
              key={product.id_producto_carrito}
              name={product.Producto.nombre}
              img={product.Producto.image}
              description={product.Producto.descripcion}
              price={product.Producto.precio}
              cantidad={product.cantidad}
              remove={() => removeProduct(product.id_producto_carrito)}
              increase={() => updateQuantity(product.id_producto, product.cantidad + 1, product.Producto.stock)}
              decrease={() => updateQuantity(product.id_producto, product.cantidad - 1, product.Producto.stock)}
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
          <p>${envio}</p>
        </span>
        <span className="cart-info total">
          <h3>Total</h3>
          <p>${total}</p>
        </span>
        <button className="btn-purchase" onClick={() => makeSale(cart, total)}>
          Comprar <IconArrowRight size={20} />
        </button>
      </footer>
    </section>
  );
}

export default Cart;
