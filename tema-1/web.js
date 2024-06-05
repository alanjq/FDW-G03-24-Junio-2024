// Declaración de una función con parámetros
function saludo(nombre, origen) {
    // Declaración de una constante
    const MENSAJE = `Saludos ${nombre} desde ${origen}.`
    // Este texto se muestra en la consola del navegador
    console.log(MENSAJE)
    // Este texto se muestra en el documento
    document.getElementById("parrafo").innerText = MENSAJE
}
