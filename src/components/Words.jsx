import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Words = () => {
    const { language } = useContext(LanguageContext);

    return (
        <section className="palabras padding">
            <div className="fila">
                <p className="palabras-uno">{language.words.uno}</p>
                <p className="palabras-dos">{language.words.dos}</p>
            </div>

            <div className="fila">
                <p className="palabras-tres">{language.words.tres}</p>
                <p className="palabras-cuatro">{language.words.cuatro}</p>
                <p className="palabras-cinco">{language.words.cinco}</p>
            </div>

            <div className="fila">
                <p className="palabras-seis">{language.words.seis}</p>
                <p className="palabras-siete">{language.words.siete}</p>
                <p className="palabras-ocho">{language.words.ocho}</p>
            </div>

            <div className="fila">
                <p className="palabras-nueve">{language.words.nueve}</p>
                <p className="palabras-diez">{language.words.diez}</p>
                <p className="palabras-once">{language.words.once}</p>
                <p className="palabras-doce">{language.words.doce}</p>
            </div>

            <div className="fila">
                <p className="palabras-trece">{language.words.trece}</p>
                <p className="palabras-catorce">{language.words.catorce}</p>
                <p className="palabras-quince">{language.words.quince}</p>
                <p className="palabras-dieciseis">{language.words.dieciseis}</p>
            </div>

            <div className="fila">
                <p className="palabras-diecisiete">{language.words.diecisiete}</p>
                <p className="palabras-dieciocho">{language.words.dieciocho}</p>
                <p className="palabras-diecinueve">{language.words.diecinueve}</p>
                <p className="palabras-veinte">{language.words.veinte}</p>
            </div>
        </section>
    )
}
