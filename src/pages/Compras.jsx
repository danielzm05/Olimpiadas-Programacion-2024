import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PurchaseCard } from "../components/PurchaseCard";
import { PurchaseProduct } from "../components/PurchaseCard";
import { useProductsContext } from "../context/ProductsContext";
import { useEffect } from "react";
import "../styles/Compras.css";

export function Compras() {
  const { purchases, getPurchases } = useProductsContext();

  useEffect(() => {
    getPurchases();
  }, []);
  return (
    <>
      <Header dark={true} />
      <main className="compras-page">
        <h2>Mis Compras</h2>
        <div className="compras-container">
          {purchases.map((purchase) => (
            <PurchaseCard key={purchase.id_venta} fecha={purchase.fecha.slice(0, 10)} estado={purchase.estado} productos={purchase.Venta_Producto} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
