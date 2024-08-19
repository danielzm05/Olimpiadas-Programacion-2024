import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Admin } from "./pages/Admin";
import { Carrito } from "./pages/Carrito";
import { ProtectedRoute } from "../src/components/ProtectedRoute";
import { useAuthContext } from "./context/AuthContext";
import { ToasterContainer } from "./components/Toaster";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const { user, userInfo } = useAuthContext();
  return (
    <>
      <ToasterContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/productos" element={<Products />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route path="/carrito" element={<Carrito />}></Route>

        <Route element={<ProtectedRoute isAuth={user?.aud} roles={[1]} userRol={userInfo?.id_rol} redirectTo="/Productos" />}>
          <Route path="/admin" element={<Admin />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
