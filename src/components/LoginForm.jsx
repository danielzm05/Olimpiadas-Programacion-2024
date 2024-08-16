import { useState } from "react";
import { supabase } from "../backend/client";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const [errorLogin, setErrorLogin] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formValues.email,
        password: formValues.password,
      });

      if (error) {
        setErrorLogin(true);
      } else {
        navigate("/admin", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Correo electrónico</label>
      <input className="input-data" type="email" id="email" name="email" placeholder="Email" required onChange={handleInputChange} />
      <label htmlFor="password">Contraseña</label>
      <input
        className="input-data"
        type="password"
        id="password"
        name="password"
        placeholder="Contraseña"
        minLength={5}
        required
        onChange={handleInputChange}
        autoComplete="off"
      />
      {errorLogin && <span className="error-message">⚠︎ Correo o contraseña incorrecta</span>}
      <input type="submit" value="Ingresar" />
    </form>
  );
}
