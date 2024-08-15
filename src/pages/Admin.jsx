import { CreateNewProduct } from "../components/CreateNewProduct";
import "../styles/Admin.css";

export function Admin() {
  return (
    <main className="admin-page">
      <CreateNewProduct />
    </main>
  );
}
