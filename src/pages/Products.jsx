import { useProductsContext } from "../context/ProductsContext";
import { useCarritoContext } from "../context/CarritoContext";
import { ProductCard } from "../components/ProductCard";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/Products.css";
import { useEffect } from "react";

export function Products() {
  const { products, getProducts } = useProductsContext();
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
              img={product.imagen}
              addToCart={() => addProduct(product)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
