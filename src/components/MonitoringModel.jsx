import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const MonitoringModel = () => {
    const { language } = useContext(LanguageContext);

    return (
        <div className="contenedor-contenido-principal">
            <main className="contenedor fadeOut">
                <h1>{language.monitoring.title}</h1>
            </main>
        </div>
    )
}
