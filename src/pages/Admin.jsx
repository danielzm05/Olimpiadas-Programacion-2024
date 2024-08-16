import { CreateNewProduct } from "../components/CreateNewProduct";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/Admin.css";

export function Admin() {
  return (
    <>
      <Header dark={true} />
      <main className="admin-page">
        <CreateNewProduct />
      </main>
      <Footer />
    </>
  );
}
