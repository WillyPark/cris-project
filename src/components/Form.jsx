import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Form = ({ tipo }) => {

    const { language } = useContext(LanguageContext);

    return (
        <form action="" className="formulario" method="POST">
            <input type="hidden" name="tipo" value={tipo} />

            <div className="campo">
                <label htmlFor="company">{language.form.company[0]}:</label>
                <input type="text" placeholder={language.form.company[1]} id="company" name="company" />
            </div>

            <div className="campo">
                <label htmlFor="email">{language.form.email[0]}:</label>
                <input type="email" placeholder={language.form.email[1]} id="email" name="email" />
            </div>

            <div className="campo">
                <label htmlFor="emailConfirm">{language.form.emailConfirm[0]}:</label>
                <input type="email" placeholder={language.form.emailConfirm[1]} id="emailConfirm" />
            </div>

            <div className="campo">
                <label htmlFor="phone">{language.form.phone[0]}:</label>
                <input type="tel" placeholder={language.form.phone[1]} id="phone" name="phone" />
            </div>

            {
                tipo == 3 && <div className="campo">
                    <label htmlFor="date">{language.form.date}:</label>
                    <input type="date" id="date" name="date" />
                </div>
            }


            <div className="campo">
                <label htmlFor="comment" className="label-textarea">{language.form.comments[0]}:</label>
                <textarea rows="5" placeholder={language.form.comments[1]} id="comment" name="comment" />
            </div>

            <button className="btn-submit" type="submit" disabled>{language.form.button}</button>
        </form>
    )
}
