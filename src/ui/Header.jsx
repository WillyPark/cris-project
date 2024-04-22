import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Header = () => {
    const { language } = useContext(LanguageContext);

    return (
        <>
            <div className="contenedor-contenido-principal">
                <header className="contenedor header fadeOut">
                    <h1 className="header__titulo">
                        {language.header.title[0]}<br />
                        {language.header.title[1]}<br />
                        {language.header.title[2]} <span className="header__titulo--resaltado">{language.header.title[3]}</span><br />
                        <span className="header__titulo--resaltado">{language.header.title[4]}</span> {language.header.title[5]}
                    </h1>

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

            <section className="palabras">
                <div className="fila">
                    <p className="header-palabras-uno">{language.header.words.uno}</p>
                    <p className="header-palabras-dos">{language.header.words.dos}</p>
                </div>

                <div className="fila">
                    <p className="header-palabras-tres">{language.header.words.tres}</p>
                    <p className="header-palabras-cuatro">{language.header.words.cuatro}</p>
                </div>

                <div className="fila">
                    <p className="header-palabras-cinco">{language.header.words.cinco}</p>
                    <p className="header-palabras-seis">{language.header.words.seis}</p>
                    <p className="header-palabras-siete">{language.header.words.siete}</p>
                </div>

                <div className="fila">
                    <p className="header-palabras-ocho">{language.header.words.ocho}</p>
                    <p className="header-palabras-nueve">{language.header.words.nueve}</p>
                </div>

                <div className="fila">
                    <p className="header-palabras-diez">{language.header.words.diez}</p>
                    <p className="header-palabras-once">{language.header.words.once}</p>
                    <p className="header-palabras-doce">{language.header.words.doce}</p>
                </div>

                <div className="fila">
                    <p className="header-palabras-trece">{language.header.words.trece}</p>
                    <p className="header-palabras-catorce">{language.header.words.catorce}</p>
                </div>

                <div className="fila">
                    <p className="header-palabras-quince">{language.header.words.quince}</p>
                    <p className="header-palabras-dieciseis">{language.header.words.dieciseis}</p>
                </div>
            </section>
        </>
    )
}
