document.getElementById("btnConvertir").addEventListener("click", function() {
    const texto = document.getElementById("inputTexto").value;
    const textoMayusculas = texto.toUpperCase();
    document.getElementById("resultado").textContent = textoMayusculas;
});
