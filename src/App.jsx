import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./ui";
import { LanguageProvider } from "./context/LanguageProvider";

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
