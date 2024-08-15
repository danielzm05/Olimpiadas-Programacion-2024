import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CarritoProvider } from "./context/CarritoContext.jsx";
import { ProductsProvider } from "./context/ProductsContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsProvider>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </ProductsProvider>
  </StrictMode>
);
