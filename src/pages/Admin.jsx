import { CreateNewProduct } from "../components/CreateNewProduct";
import { ProductCard } from "../components/ProductCard";
import { useAuthContext } from "../context/AuthContext";
import { useProductsContext } from "../context/ProductsContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import "../styles/Admin.css";

export function Admin() {
  const { products, getProducts, deleteProduct } = useProductsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header dark={true} />
      <main className="admin-page">
        <CreateNewProduct />
        <h2>Editar Productos</h2>
        <div className="products-container">
          {products.map((product) => (
            <ProductCard
              key={product.id_producto}
              name={product.nombre}
              description={`Stock:${product.stock} ${product.descripcion}`}
              price={product.precio}
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
