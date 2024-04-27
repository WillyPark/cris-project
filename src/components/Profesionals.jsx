import { useContext } from "react";
import { Form } from "./Form";
import { LanguageContext } from "../context/LanguageContext";

export const Profesionals = () => {
    const { language } = useContext(LanguageContext);
    const titulo = language.profesionals.title;
    const subtitulo = language.profesionals.subTitle;

    return (
        <>
            <div className="contenedor-contenido-principal profesionals__contenedor-arriba">
                <main className="contenedor fadeOut">
                    <div className="profesionals-contenedor">
                        <p>{titulo[0]} <strong>{titulo[1]}</strong> {titulo[2]} <strong>{titulo[3]}</strong> {titulo[4]}</p>

                        <Form tipo={1} />
                    </div>
                </main>
            </div>

            <div className="section-aux"></div>

            <div className="contenedor-contenido-principal profesionals__contenedor-abajo">
                <section className="contenedor profesionals-contenedor">
                    <Form tipo={2} />

                    <p>{subtitulo[0]} <strong>{subtitulo[1]}</strong></p>
                </section>
            </div>
        </>
    )
}
