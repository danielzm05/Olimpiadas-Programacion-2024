import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CarritoProvider } from "./context/CarritoContext.jsx";
import { ProductsProvider } from "./context/ProductsContext.jsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <CarritoProvider>
          <App />
        </CarritoProvider>
      </ProductsProvider>
    </BrowserRouter>
  </StrictMode>
);
