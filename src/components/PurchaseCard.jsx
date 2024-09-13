import "../styles/PurchaseCard.css";

export function PurchaseCard({ fecha, estado, productos }) {
  return (
    <article className="purchase-card">
      <header>{fecha}</header>
      {productos?.map((producto) => (
        <PurchaseProduct
          key={producto.id_venta_producto}
          estado={estado}
          img={producto.Producto.image}
          nombre={producto.Producto.nombre}
          descripcion={producto.Producto.descripcion}
          cantidad={producto.cantidad}
        />
      ))}
    </article>
  );
}

export function PurchaseProduct({ estado, img, nombre, descripcion, cantidad }) {
  return (
    <article className="purchase-product">
      <div className="product-img" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="purchase-info">
        <p className={`estado ${estado ? "entregado" : ""}`}>{estado ? "Entregado" : "En camino"}</p>
        <h3>{nombre}</h3>
        <p className="description">{descripcion}</p>
        <footer>
          <p>Cantidad: {cantidad}</p>
        </footer>
      </div>
    </article>
  );
}
