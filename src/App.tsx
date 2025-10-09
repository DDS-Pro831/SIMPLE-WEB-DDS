// Propósito: Punto principal de la app. Monta BrowserRouter y las rutas globales.
// Navbar y FooterReveal se renderizan dentro de MainLayout (no aquí).

import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./App.css";
import AppRoutes from "@/app/routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <main id="main-content" role="main">
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
