import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";
import { ToasterContainer } from "./components/Toaster";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <ToasterContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/productos" element={<Products />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </>
  );
}

export default App;
