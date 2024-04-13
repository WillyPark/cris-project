import { useState } from 'react';
import { LanguageContext } from './LanguageContext';
import eng from "./../language/en.json";
import esp from "./../language/es.json";

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("eng");
    let language = "";

    //Así accedemos a la propiedad de un objeto mediante el valor de una variable
    // console.log(eng[hed].title);

    if (lang == "eng") {
        language = eng;
    }

    if (lang == "esp") {
        language = esp;
    }

    return (
        <LanguageContext.Provider value={{ lang, setLang, language }}>
            {children}
        </LanguageContext.Provider>
    )
}
