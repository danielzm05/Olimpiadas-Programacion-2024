import { CreateNewProduct } from "../components/CreateNewProduct";
import { ProductCard } from "../components/ProductCard";
import { useAuthContext } from "../context/AuthContext";
import { useProductsContext } from "../context/ProductsContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { Table } from "../components/Table";
import { IconTrash } from "@tabler/icons-react";
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

        <Table title="Productos">
          <div className="table-row product">
            <span>Código</span>
            <span>Producto</span>
            <span>Precio</span>
            <span>Stock</span>
            <span>-</span>
          </div>
          {products.map((product) => (
            <div className="table-row product">
              <span>{`#${product.id_producto}`}</span>
              <span>{product.nombre}</span>
              <span>{`$${product.precio}`}</span>
              <span>{product.stock}</span>
              <span onClick={() => deleteProduct(product.id_producto)}>
                <IconTrash size={15} />
              </span>
            </div>
          ))}
        </Table>
      </main>
      <Footer />
    </>
  );
}
