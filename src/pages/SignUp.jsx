import { SignUpForm } from "../components/SignUpForm";
import { Header } from "../components/Header";
import "../styles/Login.css";

export function SignUp() {
  return (
    <>
      <Header />
      <main className="login-page">
        <h1>Regístrate</h1>
        <SignUpForm />
      </main>
    </>
  );
}
