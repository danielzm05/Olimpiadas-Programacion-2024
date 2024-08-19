import { LoginForm } from "../components/LoginForm";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
export function Login() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main className="login-page">
        <h1>Iniciar Sesión</h1>
        <LoginForm />
        <div className="message">
          <p>¿No tienes una cuenta? </p> <a onClick={() => navigate("/signup")}>Registrate</a>
        </div>
      </main>
    </>
  );
}
