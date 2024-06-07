const hora = 19

if (hora >= 0 && hora < 24) {

    if (hora < 12) {
        console.log("Buenos días");
    }
    else if (hora == 12) {
        console.log("medio día")
    }
    else if (hora > 12 && hora < 19) {
        console.log("Buenas tardes")
    }
    else if (hora >= 19) {
        console.log("Buenas noches")
    }
    else {
        console.log("Hora normal")
    }
}
else {
    console.log("Hora inválida.")
}
