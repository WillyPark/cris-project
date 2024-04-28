import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Words } from "./Words";

export const MonitoringModel = () => {
    const { language } = useContext(LanguageContext);

    return (
        <>
            <main className="contenedor-monitoring">
                <div className="monitoring-izquierda">
                    <span className="fadeOut monitoring__logo-texto monitoring__logo-texto--izquierda">Senior CRA</span>
                </div>

                <div className="monitoring-derecha">
                    <span className="fadeOut monitoring__logo-texto monitoring__logo-texto--derecha">CRAs back-Up</span>
                </div>
            </main>

            <h2 className="contenedor monitoring__titulo">{language.monitoring.title}</h2>

            <div className="contenedor monitoring__experiencia">
                <div className="monitoring__experiencia-contenedor-titulo">
                    <img className="monitoring__experiencia-list" src="./icons/barra-cursiva.svg" alt="Menu Hamburguesa" />

                    <h3><em>{language.monitoring.model}</em></h3>
                </div>

                <div className="monitoring__experiencia-contenido">
                    <div className="monitoring__experiencia-izquierda">
                        <span className="monitoring__experiencia-logo-texto">Senior CRA</span>
                        <div className="monitoring__experiencia-barra"></div>
                    </div>

                    <div className="monitoring__experiencia-derecha">
                        <p>{language.monitoring.text[0]} <span className="monitoring__experiencia--subrayado">{language.monitoring.text[1]}</span></p>
                        <p>{language.monitoring.years[0]} <span className="monitoring__experiencia--coloreado">{language.monitoring.years[1]}</span></p>
                    </div>
                </div>
            </div>

            <Words />

            <section className="model">
                <div className="model__fondo-arriba"></div>

                <div className="model__fondo">
                    <div className="model__contenedor-titulo">
                        <div className="model__logo-contenedor">
                            <span className="model__logo-texto">CRAs back-Up</span>
                        </div>

                        <div className="model__model-contenedor">
                            <img className="model__model-barras" src="./icons/barra-cursiva.svg" alt="Barras Cursivas" />

                            <h3><em>{language.monitoring.modelIntegral}</em></h3>
                        </div>
                    </div>

                    <h2 className="model__titulo">3 CRAs</h2>
                    <h2 className="model__titulo model__titulo--azul">{language.monitoring.modelTitle}</h2>

                    <div className="model__contenido">
                        <h3>{language.monitoring.accountable}</h3>

                        <div className="model__contenido-snr">
                            <p>{language.monitoring.one}</p>
                            <p>Snr. CRA</p>
                        </div>
                    </div>

                    <div className="model__contenido">
                        <h3>{language.monitoring.back}</h3>

                        <div className="model__contenido__contenedor-back">
                            <div className="model__contenido-back">
                                <p>{language.monitoring.one}</p>
                                <p>Jr. CRA</p>
                            </div>

                            <div className="model__contenido-back">
                                <p>{language.monitoring.one}</p>
                                <p>CRA trainee</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="model__fondo-abajo"></div>
            </section>
        </>
    )
}
