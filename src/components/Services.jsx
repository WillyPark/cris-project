import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Services = () => {
    const { language } = useContext(LanguageContext);

    return (
        <div className="contenedor-contenido-principal">
            <main className="contenedor fadeOut">
                <h1>{language.services.title}</h1>
            </main>
        </div>
    )
}
