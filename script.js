function calcularEdad() {
    const yearInput = document.getElementById("birthYear").value;
    const currentYear = new Date().getFullYear();

    if (yearInput === "" || isNaN(yearInput)) {
        document.getElementById("resultado").innerText = "Por favor, ingresa un año válido.";
        return;
    }

    const edad = currentYear - parseInt(yearInput);

    if (edad < 0) {
        document.getElementById("resultado").innerText = "Ese año es en el futuro.";
    } else {
        document.getElementById("resultado").innerText = `Tienes ${edad} años.`;
    }
}
