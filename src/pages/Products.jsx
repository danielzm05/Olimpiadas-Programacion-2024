import { useProductsContext } from "../context/ProductsContext";
import { useCarritoContext } from "../context/CarritoContext";
import { useAuthContext } from "../context/AuthContext";
import { ProductCard } from "../components/ProductCard";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import toast from "react-hot-toast";
import "../styles/Products.css";

export function Products() {
  const { products, getProducts } = useProductsContext();
  const { user } = useAuthContext();
  const { cart, addProduct, updateQuantity } = useCarritoContext();

  useEffect(() => {
    getProducts();
  }, []);

  const addProductToCart = (product) => {
    if (!user) {
      toast.error("Inicia sesión para usar el carrito");
      return;
    }

    const existingProduct = cart.find((item) => item.id_producto === product.id_producto);

    if (existingProduct) {
      updateQuantity(product.id_producto, existingProduct.cantidad + 1, product.stock);
      toast.success("Se agregó al carrito");
    } else {
      addProduct(product);
    }
  };

  const availableProducts = products.filter((product) => product.stock > 0);

  return (
    <>
      <Header dark={true} />
      <main className="products-page">
        <h2>NUESTROS PRODUCTOS</h2>
        <div className="products-container">
          {availableProducts.map((product) => (
            <ProductCard
              key={product.id_producto}
              img={product.image}
              name={product.nombre}
              description={product.descripcion}
              price={product.precio}
              addToCart={() => addProductToCart(product)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
