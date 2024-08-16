import { useContext, createContext, useState } from "react";
import { supabase } from "../backend/client";
export const ProductsContext = createContext();

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data, error } = await supabase.from("Producto").select("*");

    if (error) throw error;
    console.log(data);
    setProducts(data);
  };

  const createProduct = async (newProduct) => {
    const { error } = await supabase.from("Producto").insert([
      {
        id_producto: newProduct.id_producto,
        nombre: newProduct.nombre,
        precio: newProduct.precio,
        stock: newProduct.stock,
        descripcion: newProduct.descripcion,
      },
    ]);

    if (error) throw error;
    getProducts();
  };

  const deleteProduct = async (id) => {
    const { error } = await supabase.from("Producto").delete().eq("id_producto", id);

    if (error) throw error;
    getProducts();
  };

  return <ProductsContext.Provider value={{ products, getProducts, createProduct, deleteProduct }}>{children}</ProductsContext.Provider>;
};
