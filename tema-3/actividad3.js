// Expresiones regulares
function validarEmail(){
    let correo = document.getElementById('email').value

    // Validamos que sea correo
    const EXPRESION_CORREO = new RegExp(/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z]{2,15})/ig)
    // Si cumple la condición
    if(EXPRESION_CORREO.test(correo)){
        document.getElementById('mensaje').innerText = "Es un correo válido"
        return;
    }else{
        document.getElementById('mensaje').innerText = "El correo es inválido"
    }

}

