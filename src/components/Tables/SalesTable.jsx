import { Table } from "../Table";
import { IconSquareCheck } from "@tabler/icons-react";

export function SalesTable({ sales, saleSelected, updateSale }) {
  return (
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
          <tr className="sale" key={sale.id_venta} onClick={() => saleSelected(sale)}>
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
  );
}
