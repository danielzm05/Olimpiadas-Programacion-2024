import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

export const CarritoContext = createContext();

export const useCarritoContext = () => {
  return useContext(CarritoContext);
};

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addProduct = (newProduct) => {
    setCarrito((prevCarrito) => {
      if (prevCarrito.find((item) => item.id_producto === newProduct.id_producto)) {
        return prevCarrito.map((item) => (item.id_producto === newProduct.id_producto ? { ...item, cantidad: item.cantidad + 1 } : item));
      } else {
        return [...prevCarrito, { ...newProduct, cantidad: 1 }];
      }
    });
    toast.success("Se agregó al carrito");
  };

  const removeProduct = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((product) => product.id_producto !== id));
  };

  const increaseQuantity = (id) => {
    setCarrito((prevCarrito) => prevCarrito.map((item) => (item.id_producto === id ? { ...item, cantidad: item.cantidad + 1 } : item)));
  };

  const decreaseQuantity = (id) => {
    setCarrito((prevCarrito) => prevCarrito.map((item) => (item.id_producto === id ? { ...item, cantidad: Math.max(item.cantidad - 1, 1) } : item)));
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
