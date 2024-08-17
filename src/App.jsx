import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";
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
        <Route element={<ProtectedRoute isAuth={user?.aud} roles={[1]} userRol={userInfo?.id_rol} redirectTo="/Productos" />}>
          <Route path="/admin" element={<Admin />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
