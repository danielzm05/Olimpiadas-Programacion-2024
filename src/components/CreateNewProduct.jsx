import { useProductsContext } from "../context/ProductsContext";
import "../styles/CreateNewProduct.css";
import { useState } from "react";

export function CreateNewProduct() {
  const { createProduct } = useProductsContext();
  const [formValues, setFormValues] = useState({
    nombre: "Producto",
    precio: "0000,00",
    imagen: "https://desierto.co/wp-content/uploads/2022/09/Camiseta-Blanca-1.jpg",
    descripcion: "Coloca una gran descripción",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    createProduct(formValues);
  };

  return (
    <section className="new-product">
      <form className="new-product-form" onSubmit={handleSubmit}>
        <h2>Nuevo Producto</h2>
        <label htmlFor="id_producto">ID Producto</label>
        <input
          className="input-data"
          type="number"
          id="id_producto"
          name="id_producto"
          placeholder="000000"
          minLength={6}
          required
          onChange={handleInputChange}
        />
        <label htmlFor="name">Nombre</label>
        <input className="input-data" type="text" id="email" name="nombre" placeholder="Nombre" required onChange={handleInputChange} />
        <label htmlFor="precio">Precio</label>
        <input
          className="input-data"
          type="number"
          id="precio"
          name="precio"
          placeholder="0000"
          minLength={8}
          required
          onChange={handleInputChange}
        />

        <label htmlFor="stock">Stock</label>
        <input className="input-data" type="number" id="stock" name="stock" placeholder="0000" minLength={4} required onChange={handleInputChange} />
        <label htmlFor="descripcion">Descripción</label>
        <input type="text" className="input-data" id="descripcion" name="descripcion" required onChange={handleInputChange}></input>

        <input type="submit" value="Crear" />
      </form>
    </section>
  );
}
