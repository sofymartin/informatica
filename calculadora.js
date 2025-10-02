function calcularPromedio() {
    const resultado = document.getElementById("resultado");

    const nota1 = Number(prompt("Ingresa la primera nota:"));
    const nota2 = Number(prompt("Ingresa la segunda nota:"));
    const nota3 = Number(prompt("Ingresa la tercera nota:"));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultado.textContent = "Por favor, ingresa solo números válidos.";
        resultado.style.color = "orange";
        return;
    }

    const promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 6) {
        resultado.textContent = `Aprobado con promedio de ${promedio.toFixed(2)}`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = `Desaprobado con promedio de ${promedio.toFixed(2)}`;
        resultado.style.color = "red";
    }
}