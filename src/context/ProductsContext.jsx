import { useContext, createContext, useState } from "react";
import { supabase } from "../backend/client";
import toast from "react-hot-toast";
import { useAuthContext } from "./AuthContext";
import { useCarritoContext } from "./CarritoContext";

export const ProductsContext = createContext();

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const { user } = useAuthContext();
  const { cleanCart } = useCarritoContext();

  const getProducts = async () => {
    const { data, error } = await supabase.from("Producto").select("*").order("id_producto", { ascending: true });

    if (error) throw error;
    setProducts(data);
  };

  const updateProduct = async (id_producto, updatedProduct) => {
    const { error } = await supabase
      .from("Producto")
      .update({
        nombre: updatedProduct.nombre,
        image: updatedProduct.image,
        precio: updatedProduct.precio,
        stock: updatedProduct.stock,
        descripcion: updatedProduct.descripcion,
      })
      .eq("id_producto", id_producto);

    if (error) {
      toast.error("Error al modificar el producto");
      throw error;
    }
    getProducts();
    toast.success("Producto modificado correctamente");
  };

  const getSales = async () => {
    const { data, error } = await supabase.from("Venta").select("*, Venta_Producto(*, Producto(*))").order("id_venta", { ascending: true });
    if (error) throw error;
    setSales(data);
  };

  const updateSale = async (id_venta) => {
    const { error } = await supabase
      .from("Venta")
      .update({
        entregado: true,
      })
      .eq("id_venta", id_venta);

    if (error) throw error;
    getSales();
  };

  const getPurchases = async (userId = user?.id) => {
    if (userId) {
      const { data, error } = await supabase.from("Venta").select("*, Venta_Producto(*, Producto(*))").eq("id_cliente", userId);
      if (error) throw error;
      setPurchases(data);
    } else {
      setPurchases([]);
    }
  };

  const makeSale = async (cart, total) => {
    if (!user) return;
    if (!cart || cart.length === 0) {
      toast.error("El carrito está vacío");
      return;
    }

    const { data: sale, error } = await supabase
      .from("Venta")
      .insert([
        {
          id_cliente: user.id,
          total: total,
        },
      ])
      .select();

    if (error) {
      toast.error("Error al crear la venta");
      throw error;
    }

    try {
      await Promise.all(
        cart.map(async (product) => {
          await createSaleDetail(sale[0].id_venta, product.id_producto, product.cantidad, product.cantidad * product.Producto.precio);
          await updateProductStock(product.id_producto, product.cantidad, product.Producto.stock);
        })
      );
      toast.success("Pedido realizado con éxito");
      cleanCart(user.id);
      getSales();
    } catch (err) {
      throw err;
    }
  };

  const createSaleDetail = async (id_venta, id_producto, cantidad, subtotal) => {
    const { error } = await supabase.from("Venta_Producto").insert([
      {
        id_producto: id_producto,
        id_venta: id_venta,
        cantidad: cantidad,
        subtotal: subtotal,
      },
    ]);

    if (error) {
      throw error;
    }
  };

  const createProduct = async (newProduct) => {
    const { error } = await supabase.from("Producto").insert([
      {
        nombre: newProduct.nombre,
        precio: newProduct.precio,
        stock: newProduct.stock,
        image: newProduct.image,
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

  const updateProductStock = async (id_producto, cantidadVendida, stock) => {
    const newStock = stock - cantidadVendida;
    const { error } = await supabase.from("Producto").update({ stock: newStock }).eq("id_producto", id_producto);

    if (error) throw error;
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
    <ProductsContext.Provider
      value={{ products, sales, updateSale, purchases, getPurchases, getProducts, createProduct, deleteProduct, getSales, makeSale, updateProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
