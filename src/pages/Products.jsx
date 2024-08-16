import { useProductsContext } from "../context/ProductsContext";
import { useCarritoContext } from "../context/CarritoContext";
import { ProductCard } from "../components/ProductCard";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import "../styles/Products.css";

export function Products() {
  const { products, getProducts, deleteProduct } = useProductsContext();
  const { addProduct } = useCarritoContext();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header dark={true} />
      <main className="products-page">
        <h2>NUESTROS PRODUCTOS</h2>
        <div className="products-container">
          {products.map((product) => (
            <ProductCard
              key={product.id_producto}
              name={product.nombre}
              description={product.descripcion}
              price={product.precio}
              addToCart={() => addProduct(product)}
              edit={user}
              remove={() => deleteProduct(product.id_producto)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
