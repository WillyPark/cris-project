export const fecha = () => {
    const fechaHoy = new Date()
    const dia = fechaHoy.getDate();
    let mes = String(fechaHoy.getMonth() + 1);
    const year = fechaHoy.getFullYear();

    if (mes.length == 1) {
        mes = "0" + mes
    }

    const fecha = year + "-" + mes + "-" + dia

    return fecha;
}