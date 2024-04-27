import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Words } from "./Words";
import { NavLink } from "react-router-dom";

export const Services = () => {
    const { language } = useContext(LanguageContext);

    return (
        <>
            <div className="fondo-servicios">
                <div className="fadeOut">
                    {/* <Words /> */}
                </div>
            </div>

            <main className="servicios contenedor">
                <h1>{language.services.title}</h1>

                <div className="servicios-contenedor">
                    <div className="servicios__servicio">
                        <h2>{language.services.serviceOne.title[0]} <span className="monitoring__experiencia--coloreado">{language.services.serviceOne.title[1]}</span></h2>

                        <p>{language.services.serviceOne.text}</p>
                    </div>

                    <div className="servicios__servicio">
                        <h2>{language.services.serviceTwo.title[0]} <span className="monitoring__experiencia--coloreado">{language.services.serviceTwo.title[1]}</span></h2>

                        <p>{language.services.serviceTwo.text}</p>
                    </div>

                    <div className="servicios__servicio">
                        <h2>{language.services.serviceTree.title[0]} <span className="monitoring__experiencia--coloreado">{language.services.serviceTree.title[1]}</span></h2>

                        <p>{language.services.serviceTree.text[0]}</p>
                        <p>{language.services.serviceTree.text[1]}</p>
                        <p>{language.services.serviceTree.text[2]}</p>
                    </div>
                </div>

                <NavLink className="servicios__boton" to="/contact">
                    {language.services.button}
                </NavLink>
            </main>
        </>
    )
}
