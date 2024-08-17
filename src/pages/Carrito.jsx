import Cart from "../components/Cart";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/Carrito.css";

export function Carrito() {
  return (
    <>
      <Header dark={true} />
      <main className="carrito-page">
        <Cart />
      </main>
      <Footer />
    </>
  );
}
