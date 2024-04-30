import { alertaToast } from "./alertas";

export const validaciones = ({ tipo, company, email, emailConfirm, phone, date, comments }, lang) => {
    if (company.trim() == "" || email.trim() == "" || emailConfirm.trim() == "" || phone.trim() == "") {
        alertaToast("error", lang.all);
        return false;
    }

    if (email.includes("@") == false || email.includes(".") == false) {
        alertaToast("error", lang.emailInvalid);
        return false;
    }

    if (email != emailConfirm) {
        alertaToast("error", lang.email);
        return false;
    }

    if (tipo == 3) {
        if (date.trim() == "") {
            alertaToast("error", lang.date);
            return false
        }

        if ([6, 0].includes(new Date(date).getUTCDay())) {
            alertaToast("error", lang.weekend);
            return false;
        }
    }

    return true
}