let valor = 10;

function disminuirContador() {
  if (valor > 0) {
    valor--;
    document.getElementById("contador").innerText = valor;
  }
}