import { alerta } from "./alertas";

export const validaciones = ({ tipo, company, email, emailConfirm, phone, date, comments }, lang) => {

    if (company.trim() == "" || email.trim() == "" || emailConfirm.trim() == "" || phone.trim() == "") {
        alerta("error", lang.all);
        return false;
    }

    if (email != emailConfirm) {
        alerta("error", lang.email);
        return false;
    }

    if (tipo == 3) {
        if (date.trim() == "") {
            alerta("error", lang.date);
            return false
        }

        if ([6, 0].includes(new Date(date).getUTCDay())) {
            alerta("error", lang.weekend);
            return false;
        }
    }

    return true
}