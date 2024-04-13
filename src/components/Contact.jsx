import { useContext } from "react";
import { Form } from "./Form";
import { LanguageContext } from "../context/LanguageContext";

export const Contact = () => {
    const { language } = useContext(LanguageContext);

    return (
        <div className="contenedor-contenido-principal">
            <main className="contenedor fadeOut contact-contenedor">
                <h1>{language.contact.title}</h1>

                <Form tipo={3} />
            </main>
        </div>
    )
}
