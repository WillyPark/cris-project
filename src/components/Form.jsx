import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useForm } from "../hooks/useForm";
import { alertaLoader, alertaSwal2, fecha, validaciones } from "../helpers";

export const Form = ({ tipo }) => {

    const fechaHoy = fecha();
    const { language } = useContext(LanguageContext);

    const initialState = {
        "tipo": tipo,
        "company": "",
        "email": "",
        "emailConfirm": "",
        "phone": "",
        "date": "",
        "comment": ""
    }

    const [values, handleInputChange, reset] = useForm(initialState);
    const { company, email, emailConfirm, phone, date, comment } = values;
    const lenguajeValidaciones = language.form.validations;
    const lenguajeAlertas = language.alerts;

    const handleSubmit = (e) => {
        e.preventDefault();

        const validacion = validaciones(values, lenguajeValidaciones);

        if (validacion) {
            const formData = new FormData();

            formData.append("tipo", tipo);
            formData.append("company", company);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("date", date);
            formData.append("comment", comment);

            alertaLoader(lenguajeAlertas.sending.title, lenguajeAlertas.sending.text);

            fetch("http://localhost:5000/back/formulario.php", {
                method: "POST",
                body: formData
            })
                .then(respuesta => respuesta.json())
                .then(resultado => {
                    if (resultado) {
                        alertaSwal2(lenguajeAlertas.success.title, lenguajeAlertas.success.text, "success");
                        return;
                    }

                    alertaSwal2("Error", lenguajeAlertas.error, "error");
                    return;
                })
                .catch(error => {
                    alertaSwal2("Error", lenguajeAlertas.error, "error");
                })
        }
    }

    const validarNumero = (e) => {
        const key = e.which || e.keyCode;

        if (isNaN(String.fromCharCode(key)) && key != 8 && key != 9 && key != 13 && key != 37 && key != 39 && key != 46) {
            e.preventDefault();
        }
    }

    return (
        <form onSubmit={handleSubmit} className="formulario" method="POST">
            <input type="hidden" name="tipo" value={tipo} />

            <div className="campo">
                <label htmlFor="company">{language.form.company[0]}:</label>
                <input type="text" placeholder={language.form.company[1]} id="company" name="company" value={company} onChange={handleInputChange} />
            </div>

            <div className="campo">
                <label htmlFor="email">{language.form.email[0]}:</label>
                <input type="email" placeholder={language.form.email[1]} id="email" name="email" value={email} onChange={handleInputChange} />
            </div>

            <div className="campo">
                <label htmlFor="emailConfirm">{language.form.emailConfirm[0]}:</label>
                <input type="email" placeholder={language.form.emailConfirm[1]} id="emailConfirm" name="emailConfirm" value={emailConfirm} onChange={handleInputChange} />
            </div>

            <div className="campo">
                <label htmlFor="phone">{language.form.phone[0]}:</label>
                <input onKeyDown={validarNumero} type="tel" placeholder={language.form.phone[1]} id="phone" name="phone" value={phone} onChange={handleInputChange} />
            </div>

            {
                tipo == 3 && <div className="campo">
                    <label htmlFor="date">{language.form.date}:</label>
                    <input type="date" id="date" name="date" min={fechaHoy} value={date} onChange={handleInputChange} />
                </div>
            }

            <div className="campo">
                <label htmlFor="comment" className="label-textarea">{language.form.comments[0]}:</label>
                <textarea rows="5" placeholder={language.form.comments[1]} id="comment" name="comment" value={comment} onChange={handleInputChange} />
            </div>

            <button className="btn-submit" type="submit">{language.form.button}</button>
        </form>
    )
}
