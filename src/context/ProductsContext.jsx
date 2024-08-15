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
  return <ProductsContext.Provider value={{ products, getProducts }}>{children}</ProductsContext.Provider>;
};
