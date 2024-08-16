import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Login } from "./pages/Login";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Admin } from "./pages/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/productos" element={<Products />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
