let contador = 0;

document.getElementById("contadorbtn").addEventListener("click", () => {
    contador++;
    document.getElementById("contador").innerText = contador;
});
