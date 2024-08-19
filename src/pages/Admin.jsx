import { CreateNewProduct } from "../components/CreateNewProduct";
import { ProductCard } from "../components/ProductCard";
import { useAuthContext } from "../context/AuthContext";
import { useProductsContext } from "../context/ProductsContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { Table } from "../components/Table";
import { IconTrash } from "@tabler/icons-react";
import { IconSquareCheck } from "@tabler/icons-react";
import "../styles/Admin.css";

export function Admin() {
  const { products, sales, updateSale, getProducts, deleteProduct, getSales } = useProductsContext();
  const { user } = useAuthContext();
  const [saleSelected, setSaleSelected] = useState(null);

  useEffect(() => {
    getProducts();
    getSales();
  }, []);

  const selected = (sale) => {
    setSaleSelected(sale);
    console.log(saleSelected);
  };

  return (
    <>
      <Header dark={true} />
      <main className="admin-page">
        <h2 className="page-title">GESTIONAR TIENDA</h2>
        <Table title="Productos">
          <div className="table-row product">
            <span>Código</span>
            <span>Producto</span>
            <span>Precio</span>
            <span>Stock</span>
            <span>-</span>
          </div>
          {products.map((product) => (
            <div className="table-row product" key={product.id_producto}>
              <span>{`#${product.id_producto}`}</span>
              <span>{product.nombre}</span>
              <span>{`$${product.precio}`}</span>
              <span>{product.stock}</span>
              <span>
                <IconTrash size={15} onClick={() => deleteProduct(product.id_producto)} />
              </span>
            </div>
          ))}
        </Table>

        <CreateNewProduct />

        <Table title="Pedido">
          <div className="table-row sale">
            <span>Código</span>
            <span>Fecha</span>
            <span>Hora</span>
            <span>Total</span>
            <span>Estado</span>
          </div>
          {sales.map((sale) => (
            <div className="table-row sale" key={sale.id_venta} onClick={() => selected(sale)}>
              <span>{`#${sale.id_venta}`}</span>
              <span>{sale.fecha.slice(0, 10)}</span>
              <span>{sale.fecha.slice(11, 16)}</span>
              <span>{`$${sale.total}`}</span>
              <span className={`estado ${sale.entregado ? "entregado" : ""}`}>{sale.entregado ? "Entregado" : "Pendiente"}</span>
              <span>{!sale.entregado && <IconSquareCheck size={15} onClick={() => updateSale(sale.id_venta)} />}</span>
            </div>
          ))}
        </Table>

        <Table title={`Detalles de Pedido #${saleSelected ? saleSelected.id_venta : ""}`}>
          <div className="table-row sale_detail">
            <span>Cód</span>
            <span>Producto</span>
            <span>Precio</span>
            <span>Cant</span>
            <span>
              <b>Subtotal</b>
            </span>
          </div>
          {saleSelected &&
            saleSelected.Venta_Producto.map((product) => (
              <div className="table-row sale_detail" key={product.Producto.id_producto}>
                <span>{`#${product.Producto.id_producto}`}</span>
                <span>{product.Producto.nombre}</span>
                <span>{`$${product.subtotal / product.cantidad}`}</span>
                <span>{product.cantidad}</span>
                <span>
                  <b>{`$${product.subtotal}`}</b>
                </span>
              </div>
            ))}
        </Table>
      </main>
      <Footer />
    </>
  );
}
