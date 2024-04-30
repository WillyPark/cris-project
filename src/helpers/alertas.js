import Swal from "sweetalert2";

export const alertaToast = (icono, mensaje) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 4500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
        customClass: {
            container: "swal2-toast-my-container",
            title: "swal2-toast-my-title",
            icon: "swal2-toast-my-icon"
        },
    });
    Toast.fire({
        icon: icono,
        title: mensaje
    });
}

export const alertaLoader = (titulo, mensaje) => {
    Swal.fire({
        title: titulo,
        text: mensaje,
        customClass: {
            title: "swal2-my-title",
            htmlContainer: "swal2-my-html-container",
            loader: "swal2-my-confirm-button"
        },
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: () => !Swal.isLoading()
    })
    Swal.showLoading()
}

export const alertaSwal2 = (titulo, texto, icono) => {
    Swal.fire({
        title: titulo,
        text: texto,
        icon: icono,
        customClass: {
            title: "swal2-my-title ",
            icon: "swal2-my-icon",
            htmlContainer: "swal2-my-html-container",
            confirmButton: "swal2-my-confirm-button"
        }
    });
}