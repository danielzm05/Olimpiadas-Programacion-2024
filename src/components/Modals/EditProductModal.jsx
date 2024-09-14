import { Modal } from "../Modal";
import { useProductsContext } from "../../context/ProductsContext";
import { useState, useEffect } from "react";

export function EditProductModal({ isOpen, onClose, product }) {
  const { updateProduct } = useProductsContext();
  const [updatedProduct, setUpdatedProduct] = useState({});

  useEffect(() => {
    console.log(product);
    setUpdatedProduct({
      nombre: product?.nombre || "",
      precio: product?.precio || "",
      image: product?.image || "",
      stock: product?.stock || "",
      descripcion: product?.descripcion || "",
    });
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(product.id_producto, updatedProduct);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Modificar Producto</h2>
      <form className="new-product-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input className="input-data" value={updatedProduct.nombre} type="text" id="email" name="nombre" required onChange={handleChange} />
        <label htmlFor="precio">Precio</label>
        <input
          className="input-data"
          value={updatedProduct.precio}
          type="number"
          id="precio"
          name="precio"
          min={0}
          minLength={8}
          required
          onChange={handleChange}
        />

        <label htmlFor="stock">Stock</label>
        <input
          className="input-data"
          value={updatedProduct.stock}
          type="number"
          id="stock"
          name="stock"
          min={0}
          minLength={4}
          required
          onChange={handleChange}
        />
        <label htmlFor="image">Imagen</label>
        <input type="text" className="input-data" value={updatedProduct.image} id="image" name="image" required onChange={handleChange}></input>

        <label htmlFor="descripcion">Descripción</label>
        <input
          type="text"
          className="input-data"
          value={updatedProduct.descripcion}
          id="descripcion"
          name="descripcion"
          required
          onChange={handleChange}
        ></input>

        <input type="submit" value="Modificar" />
      </form>
    </Modal>
  );
}
