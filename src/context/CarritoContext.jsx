import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { supabase } from "../backend/client";
import { useAuthContext } from "./AuthContext";

export const CarritoContext = createContext();

export const useCarritoContext = () => {
  return useContext(CarritoContext);
};

export const CarritoProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { user } = useAuthContext();

  const getCart = async (userId = user?.id) => {
    if (userId) {
      const { data, error } = await supabase.from("Carrito_Producto").select("*").eq("id_usuario", userId).select("*, Producto (*)");

      if (error) throw error;
      console.log(data);
      setCart(data);
    }
  };

  const addProduct = async (product) => {
    const { error } = await supabase.from("Carrito_Producto").insert([
      {
        id_producto: product.id_producto,
        cantidad: 1,
      },
    ]);

    if (error) {
      toast.error("Error al agregar el producto");
      throw error;
    }
    toast.success("Se agregó al carrito");
  };

  const removeProduct = async (id_producto) => {
    const { error } = await supabase.from("Carrito_Producto").delete().eq("id_producto_carrito", id_producto).eq("id_usuario", user.id);

    if (error) throw error;
    getCart();
    toast.success("Se eliminó del carrito");
  };

  const cleanCart = async (userId) => {
    const { error } = await supabase.from("Carrito_Producto").delete().eq("id_usuario", userId);

    if (error) throw error;

    setCart([]);
  };

  const updateQuantity = async (id_producto, cantidad, stock) => {
    if (cantidad <= 1 || cantidad > stock) return;
    const { error } = await supabase
      .from("Carrito_Producto")
      .update({
        cantidad: cantidad,
      })
      .eq("id_producto", id_producto);

    if (error) throw error;
    getCart();
  };

  return (
    <CarritoContext.Provider
      value={{
        cart,
        getCart,
        cleanCart,
        addProduct,
        removeProduct,
        updateQuantity,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
