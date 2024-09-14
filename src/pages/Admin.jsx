import { CreateNewProduct } from "../components/CreateNewProduct";
import { useProductsContext } from "../context/ProductsContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { EditProductModal } from "../components/Modals/EditProductModal";
import { Table } from "../components/Table";
import { IconTrash } from "@tabler/icons-react";
import { IconPencil } from "@tabler/icons-react";
import { IconSquareCheck } from "@tabler/icons-react";
import "../styles/Admin.css";

export function Admin() {
  const { products, sales, updateSale, getProducts, deleteProduct, getSales } = useProductsContext();
  const [saleSelected, setSaleSelected] = useState(null);
  const [productSelected, setProductSelected] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getProducts();
    getSales();
  }, []);

  return (
    <>
      <Header dark={true} />
      <main className="admin-page">
        <h2 className="page-title">GESTIONAR TIENDA</h2>
        <Table title="Productos">
          <thead>
            <tr className="product">
              <th>Código</th>
              <th>Imagen</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr className="product" key={product.id_producto} onClick={() => setProductSelected(product)}>
                <td>{`#${product.id_producto}`}</td>
                <td>
                  <img src={product.image} alt={product.nombre} />
                </td>
                <td>{product.nombre}</td>
                <td>{`$${product.precio}`}</td>
                <td>{product.stock}</td>
                <td onClick={() => setOpenModal(true)}>
                  <IconPencil size={15} />
                </td>
                <td>
                  <IconTrash size={15} onClick={() => deleteProduct(product.id_producto)} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <CreateNewProduct />

        <Table title="Pedidos">
          <thead>
            <tr className="sale">
              <th>Código</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Total</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr className="sale" key={sale.id_venta} onClick={() => setSaleSelected(sale)}>
                <td>{`#${sale.id_venta}`}</td>
                <td>{sale.fecha.slice(0, 10)}</td>
                <td>{sale.fecha.slice(11, 16)}</td>
                <td>{`$${sale.total}`}</td>
                <td className={`estado ${sale.entregado ? "entregado" : ""}`}>{sale.entregado ? "Entregado" : "Pendiente"}</td>
                <td>{!sale.entregado && <IconSquareCheck size={15} onClick={() => updateSale(sale.id_venta)} />}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Table title={`Detalles de Pedido #${saleSelected ? saleSelected.id_venta : ""}`}>
          <thead>
            <tr className="sale_detail">
              <th>Cód</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cant</th>
              <th>
                <b>Subtotal</b>
              </th>
            </tr>
          </thead>
          <tbody>
            {saleSelected &&
              saleSelected.Venta_Producto.map((product) => (
                <tr className="sale_detail" key={product.Producto.id_producto}>
                  <td>{`#${product.Producto.id_producto}`}</td>
                  <td>{product.Producto.nombre}</td>
                  <td>{`$${product.subtotal / product.cantidad}`}</td>
                  <td>{product.cantidad}</td>
                  <td>
                    <b>{`$${product.subtotal}`}</b>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </main>
      <EditProductModal isOpen={openModal} onClose={() => setOpenModal(false)} product={productSelected} />
      <Footer />
    </>
  );
}
