import { Table } from "../Table";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { useProductsContext } from "../../context/ProductsContext";
import { useState } from "react";
import { EditProductModal } from "../Modals/EditProductModal";

export function ProductsTable({ products }) {
  const { deleteProduct } = useProductsContext();
  const [productSelected, setProductSelected] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
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
      <EditProductModal isOpen={openModal} onClose={() => setOpenModal(false)} product={productSelected} />
    </>
  );
}
