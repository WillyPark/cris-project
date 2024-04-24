import { useContext } from "react";
import { Form } from "./Form";
import { LanguageContext } from "../context/LanguageContext";

export const Contact = () => {
    const { language } = useContext(LanguageContext);

    return (
        <div className="contenedor-contenido-principal">
            <main className="contenedor fadeOut contact-contenedor">
                <h1>{language.contact.title}</h1>

                <div className="contact-form">
                    <Form tipo={3} />
                </div>
            </main>
        </div>
    )
}
