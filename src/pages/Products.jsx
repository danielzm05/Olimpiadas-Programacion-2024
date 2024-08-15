import { useProductsContext } from "../context/ProductsContext";
import { ProductCard } from "../components/ProductCard";
import "../styles/Products.css";
import { useEffect } from "react";

export function Products() {
  const { products, getProducts } = useProductsContext();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="products-page">
      <h2>NUESTROS PRODUCTOS</h2>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard name={product.nombre} description={product.descripcion} price={product.precio} img={product.imagen} />
        ))}
      </div>
    </main>
  );
}
