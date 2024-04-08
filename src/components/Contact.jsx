import { Form } from "./Form";

export const Contact = () => {
    return (
        <div className="contenedor-contenido-principal">
            <main className="contenedor fadeOut contact-contenedor">
                <h1>When do you want us to start?</h1>

                <Form tipo={3} />
            </main>
        </div>
    )
}
