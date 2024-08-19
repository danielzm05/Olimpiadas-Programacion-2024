import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CarritoProvider } from "./context/CarritoContext.jsx";
import { ProductsProvider } from "./context/ProductsContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CarritoProvider>
          <ProductsProvider>
            <App />
          </ProductsProvider>
        </CarritoProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
