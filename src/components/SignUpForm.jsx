import { useState } from "react";
import { supabase } from "../backend/client";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function SignUpForm() {
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

    const { error } = await supabase.auth.signUp({
      email: formValues.email,
      password: formValues.password,
    });

    if (error) throw error;
    toast.success("Ya estas registrado!");
    navigate("/productos");
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
      <input type="submit" value="Ingresar" />
    </form>
  );
}
