import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Words } from "./Words";

export const MonitoringModel = () => {
    const { language } = useContext(LanguageContext);

    return (
        <>
            <main className="contenedor-monitoring">
                <div className="monitoring-izquierda">
                    <img className="fadeOut monitoring__logo monitoring__logo--gris" src="./img/logo.webp" alt="Logo"></img>
                    <span className="fadeOut monitoring__logo-texto monitoring__logo-texto--izquierda">Senior CRA</span>
                </div>

                <div className="monitoring-derecha">
                    <img className="fadeOut monitoring__logo" src="./img/logo.webp" alt="Logo"></img>
                    <span className="fadeOut monitoring__logo-texto monitoring__logo-texto--derecha">CRAs back-Up</span>
                </div>
            </main>

            <h2 className="monitoring__titulo">{language.monitoring.title}</h2>

            <div className="contenedor monitoring__experiencia">
                <div className="monitoring__experiencia-contenedor-titulo">
                    <img className="monitoring__experiencia-list" src="./icons/barras.svg" alt="Menu Hamburguesa" />

                    <h3><em>{language.monitoring.model}</em></h3>
                </div>

                <div className="monitoring__experiencia-contenido">
                    <div className="monitoring__experiencia-izquierda">
                        <img className="fadeOut monitoring__experiencia-logo" src="./img/logo.webp" alt="Logo"></img>
                        <span className="fadeOut monitoring__experiencia-logo-texto">Senior CRA</span>
                    </div>

                    <div className="monitoring__experiencia-derecha">
                        <p>{language.monitoring.text[0]} <span className="monitoring__experiencia--subrayado">{language.monitoring.text[1]}</span></p>
                        <p>{language.monitoring.years[0]} <span className="monitoring__experiencia--coloreado">{language.monitoring.years[1]}</span></p>
                    </div>
                </div>
            </div>

            <Words />
        </>
    )
}
