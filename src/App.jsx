import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./ui";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="height-aux"></div>

      <Outlet />

      <Footer className="contenedor" />
    </div>
  )
}

export default App
