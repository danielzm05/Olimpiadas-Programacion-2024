import { IconX } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import "../styles/Carrito.css";

export function Carrito({ isClose }) {
  return (
    <div className="overlay">
      <section className="carrito">
        <button className="close-button" onClick={isClose}>
          <IconX size={15} />
        </button>
        <h2>Cart</h2>
        <CartProduct
          name={"Guitarra"}
          description={"weofnwnefiweif"}
          price={20000}
          img={"https://allmusic-arg.netlify.app/assets/img/guitarra_takamine_acus.png"}
        />
      </section>
    </div>
  );
}

function CartProduct({ name, description, price, img }) {
  return (
    <article className="cart-product">
      <div className="product-img" style={{ backgroundImage: `url(${img})` }}></div>
      <section className="product-info">
        <span>
          <h3>{name}</h3>
          <p className="price">${price}</p>
        </span>
        <p>{description}</p>

        <footer>
          <div className="quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

          <IconTrash size={15} />
        </footer>
      </section>
    </article>
  );
}
