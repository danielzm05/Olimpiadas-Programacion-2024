import { useProductsContext } from "../context/ProductsContext";
import { ProductCard } from "./ProductCard";
import "../styles/CreateNewProduct.css";
import { useState } from "react";

export function CreateNewProduct() {
  const { createProduct } = useProductsContext();
  const [formValues, setFormValues] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    stock: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct(formValues);

    setFormValues({
      nombre: "",
      precio: "",
      descripcion: "",
      stock: "",
      image: "",
    });
  };

  return (
    <section className="new-product">
      <form className="new-product-form" onSubmit={handleSubmit}>
        <h2>Nuevo Producto</h2>
        <label htmlFor="name">Nombre</label>
        <input
          className="input-data"
          type="text"
          id="email"
          name="nombre"
          placeholder="Nombre"
          required
          value={formValues.nombre}
          onChange={handleInputChange}
        />
        <label htmlFor="precio">Precio</label>
        <input
          className="input-data"
          type="number"
          id="precio"
          name="precio"
          placeholder="0000"
          min="1"
          max="99999999"
          required
          value={formValues.precio}
          onChange={handleInputChange}
        />

        <label htmlFor="stock">Stock</label>
        <input
          className="input-data"
          type="number"
          id="stock"
          name="stock"
          placeholder="0000"
          min="0"
          max="999999"
          required
          value={formValues.stock}
          onChange={handleInputChange}
        />
        <label htmlFor="image">Url Imagen</label>
        <input type="text" className="input-data" id="image" name="image" required value={formValues.image} onChange={handleInputChange} />
        <label htmlFor="descripcion">Descripción</label>
        <input
          type="text"
          className="input-data"
          id="descripcion"
          name="descripcion"
          required
          value={formValues.descripcion}
          onChange={handleInputChange}
        />

        <input type="submit" value="Crear" />
      </form>

      <ProductCard name={formValues.nombre} img={formValues.img} price={formValues.precio} description={formValues.descripcion} />
    </section>
  );
}
