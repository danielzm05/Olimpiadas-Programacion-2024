import { createContext, useContext, useState } from "react";

export const CarritoContext = createContext();

export const useCarritoContext = () => {
  return useContext(CarritoContext);
};

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addProduct = (newProduct) => {
    setCarrito((prevCarrito) => {
      if (prevCarrito.find((item) => item.id === newProduct.id)) {
        return prevCarrito.map((item) => (item.id === newProduct.id ? { ...item, cantidad: item.cantidad + 1 } : item));
      } else {
        return [...prevCarrito, { ...newProduct, cantidad: 1 }];
      }
    });
  };

  const removeProduct = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((product) => product.id !== id));
  };

  const increaseQuantity = (id) => {
    setCarrito((prevCarrito) => prevCarrito.map((item) => (item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item)));
  };

  const decreaseQuantity = (id) => {
    setCarrito((prevCarrito) => prevCarrito.map((item) => (item.id === id ? { ...item, cantidad: Math.max(item.cantidad - 1, 1) } : item)));
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
