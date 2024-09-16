import { CreateNewProduct } from "../components/CreateNewProduct";
import { useProductsContext } from "../context/ProductsContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { ChartContainer, PieChart, BarChart } from "../components/Charts";
import { SaleDetailsTable } from "../components/Tables/SaleDetailsTable";
import { ProductsTable } from "../components/Tables/ProductsTable";
import { SalesTable } from "../components/Tables/SalesTable";
import { IconTruck, IconShirt } from "@tabler/icons-react";
import "../styles/Admin.css";

export function Admin() {
  const { products, getProductsStats, productsStats, sales, updateSale, getProducts, getSales } = useProductsContext();
  const [saleSelected, setSaleSelected] = useState(null);

  useEffect(() => {
    getProducts();
    getProductsStats();
    getSales();
  }, []);

  const salesData = {
    labels: ["Entregado", "En Camino"],
    datasets: [
      {
        label: "Pedidos",
        data: [sales.filter((sale) => sale.entregado).length, sales.filter((sale) => !sale.entregado).length],
        backgroundColor: ["rgb(16, 190, 65)", "rgb(150, 150, 150)"],
        hoverOffset: 4,
      },
    ],
  };

  const topProducts = {
    labels: productsStats.map((p) => p.nombre).slice(0, 5),
    datasets: [
      {
        label: "Ventas",
        data: productsStats.map((p) => p.total_vendido).slice(0, 5),
        backgroundColor: ["#405456"],
      },
    ],
  };

  return (
    <>
      <Header dark={true} />
      <main className="admin-page">
        <ul className="sections">
          <li>
            <a href="#Sales">
              <IconTruck size={15} />
              Pedidos
            </a>
          </li>
          <li>
            <a href="#Products">
              <IconShirt size={15} />
              Productos
            </a>
          </li>
        </ul>

        <h2 id="Pedidos" className="page-title">
          Pedidos
        </h2>
        <section className="admin-section sales">
          <SalesTable sales={sales} saleSelected={(sale) => setSaleSelected(sale)} updateSale={(id_venta) => updateSale(id_venta)} />
          <SaleDetailsTable saleSelected={saleSelected} />
          <ChartContainer>
            <h2>Estado Pedidos</h2>
            <PieChart data={salesData} />
          </ChartContainer>
        </section>

        <h2 id="Products" className="page-title">
          Productos
        </h2>
        <section className="admin-section products">
          <CreateNewProduct />
          <ChartContainer>
            <h2>Productos más vendidos</h2>
            <BarChart data={topProducts} />
          </ChartContainer>
          <ProductsTable products={products} />
        </section>
      </main>
      <Footer />
    </>
  );
}
