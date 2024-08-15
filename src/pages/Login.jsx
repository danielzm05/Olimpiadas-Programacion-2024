import { LoginForm } from "../components/LoginForm";
import "../styles/Login.css";
export function Login() {
  return (
    <main className="login-page">
      <h1>Iniciar Sesión</h1>
      <LoginForm />
      <div className="message">
        <p>¿No tienes una cuenta? </p> <a href="/productos">Registrate</a>
      </div>
    </main>
  );
}
