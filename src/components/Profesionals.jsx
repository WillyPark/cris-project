import { Form } from "./Form";

export const Profesionals = () => {
    return (
        <>
            <div className="contenedor-contenido-principal">
                <main className="contenedor fadeOut">
                    <div className="profesionals-contenedor">
                        <p>You are already a <strong>CRA</strong> wanting <strong>to be better profesional</strong> by collaborating with us?</p>

                        <Form tipo={1} />
                    </div>
                </main>
            </div>

            <div className="section-aux"></div>

            <div className="contenedor-contenido-principal">
                <section className="contenedor profesionals-contenedor">
                    <Form tipo={2} />

                    <p>Do you want to join in our <strong>CRA trainee program?</strong></p>
                </section>
            </div>
        </>
    )
}
