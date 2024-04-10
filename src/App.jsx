import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./ui";
import { LanguageProvider } from "./context/LanguageProvider";
// import language from "./language/en.json";
//Todo averiguar como usar una variable en todos los componentes o bien crear un context

const App = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <div className="height-aux"></div>

      <Outlet />

      <Footer className="contenedor" />
    </LanguageProvider>
  )
}

export default App
