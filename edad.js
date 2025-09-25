document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('verificarEdadBtn');
    const resultadoTexto = document.getElementById('resultado');
    function verificarEdad() {
        const edadIngresada = prompt("Por favor, ingresa tu edad:");
        const edad = parseInt(edadIngresada);
        let mensaje;
        if (edadIngresada === null || edadIngresada.trim() === "") {
            mensaje = "Operación cancelada o edad no ingresada.";
        } 
        else if (isNaN(edad) || edad < 0) {
            mensaje = "Entrada inválida. Por favor, ingresa una edad válida (solo números positivos).";
        } 
        else if (edad >= 18) {
            mensaje = `Acceso Permitido. Tienes ${edad} años. ¡Disfruta!`;
        } 
        else {
            mensaje = `Acceso Denegado. Tienes ${edad} años. Debes ser mayor de 18.`;
        }
        resultadoTexto.textContent = mensaje;
        resultadoTexto.style.color = color;
    }
    if (boton) {
        boton.addEventListener('click', verificarEdad);
    }
});