import { Table } from "../Table";

export function SaleDetailsTable({ saleSelected }) {
  return (
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
            <tr className="sale_detail" key={product?.id_venta_producto}>
              <td>{`#${product.Producto ? product.Producto.id_producto : ""}`}</td>
              <td>{product.Producto ? product?.Producto.nombre : "Producto Eliminado"}</td>
              <td>{`$${product.subtotal / product.cantidad}`}</td>
              <td>{product.cantidad}</td>
              <td>
                <b>{`$${product.subtotal}`}</b>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
