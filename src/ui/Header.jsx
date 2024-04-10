import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Header = () => {
    const { lenguaje } = useContext(LanguageContext);
    console.log(lenguaje);

    return (
        <div className="contenedor-contenido-principal">
            <header className="contenedor header fadeOut">
                <h1>{lenguaje.header.title}</h1>
                {/* <h1>Monitorgi</h1> */}

                {/* <p className="header__llave">&#123;</p> */}

                <div className="header__contenido">
                    <p>100% Deliverables</p>
                    <p>100% Fit on you MP</p>
                    <p>Up to 80% saving money</p>
                    <p>Up to 70% saving time</p>
                    <p>Up to 60% les queries</p>
                    <p>Up to 50% less CRA handovers</p>
                </div>
            </header>
        </div>
    )
}
