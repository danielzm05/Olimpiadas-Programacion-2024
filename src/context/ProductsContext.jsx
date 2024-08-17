import { useContext, createContext, useState } from "react";
import { supabase } from "../backend/client";
import toast from "react-hot-toast";
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

    if (error) {
      toast.error("Error al crear el producto");
      throw error;
    }
    toast.success("Producto creado correctamente");
    getProducts();
  };

  const deleteProduct = async (id) => {
    const { error } = await supabase.from("Producto").delete().eq("id_producto", id);

    if (error) {
      toast.error("Error al eliminar el producto");
      throw error;
    }
    toast.success("Producto eliminado correctamente");
    getProducts();
  };

  return <ProductsContext.Provider value={{ products, getProducts, createProduct, deleteProduct }}>{children}</ProductsContext.Provider>;
};
