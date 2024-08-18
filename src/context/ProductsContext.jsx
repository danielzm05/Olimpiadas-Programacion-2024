import { useContext, createContext, useState } from "react";
import { supabase } from "../backend/client";
import toast from "react-hot-toast";
export const ProductsContext = createContext();

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);

  const getProducts = async () => {
    const { data, error } = await supabase.from("Producto").select("*");

    if (error) throw error;
    setProducts(data);
  };

  const getSales = async () => {
    const { data, error } = await supabase.from("Venta").select("*, Venta_Producto(*, Producto(*))");
    console.log(data);
    if (error) throw error;
    setSales(data);
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

  return (
    <ProductsContext.Provider value={{ products, sales, getProducts, createProduct, deleteProduct, getSales }}>{children}</ProductsContext.Provider>
  );
};
