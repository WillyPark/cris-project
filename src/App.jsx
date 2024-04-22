import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./ui";
import { LanguageProvider } from "./context/LanguageProvider";
import { ScrollToTop } from "./components/ScrollToTop";

const App = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <div className="height-aux"></div>

      <Outlet />
      <ScrollToTop />

      <Footer className="contenedor" />
    </LanguageProvider>
  )
}

export default App
