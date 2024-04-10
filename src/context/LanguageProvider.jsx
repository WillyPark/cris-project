import { useState } from 'react';
import { LanguageContext } from './LanguageContext';
import eng from "./../language/en.json";
import esp from "./../language/es.json";

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("en");
    let lenguaje = "";

    if (lang == "en") {
        lenguaje = eng;
    }

    if (lang == "es") {
        lenguaje = esp;
    }

    return (
        <LanguageContext.Provider value={{ lang, setLang, lenguaje }}>
            {children}
        </LanguageContext.Provider>
    )
}
