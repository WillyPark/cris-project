import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./ui";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* //TODO averiguar si conviene usar esto o el margen para el posicionamiento */}
      <div className="height-aux"></div>

      <div className="contenedor-contenido-principal">
        <div className="contenedor">
          <Outlet />
        </div>
      </div>

      <Footer className="contenedor" />
    </div>
  )
}

export default App
