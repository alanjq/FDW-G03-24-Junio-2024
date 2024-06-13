function factorial(numero) {
    // Si no se ingresa un valor
    if (!numero) {
        console.warn("No ingresaste un número.")
        return;
    }

    // Notificar si no es número
    if (isNaN(numero)) {
        console.error(`(${numero}) NO es un número`)
        return;
    }

    // Número no puede ser cero
    if (numero === 0) {
        console.warn("El número no puede ser 0.")
        return;
    }

    // Verificamos que no sean negativos
    if (Math.sign(numero) == -1) {
        console.warn('El número no puede ser negativo.')
        return;
    }

    let total = 1
    for (i = 1; i <= numero; i++) {
        total = total * i;
    }
    console.log(`El factorial del número ${numero} es ${total}`)
}

// factorial()
