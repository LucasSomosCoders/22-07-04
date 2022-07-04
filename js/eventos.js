function cambiarColor() {
  let titulo = document.getElementById("titulo1");
  titulo.style.color = "blue";
}

const cambiarColor2 = () => {
  let titulo = document.getElementById("titulo1");
  titulo.style.color = "red";
};

let titulo = document.getElementById("titulo1");
titulo.addEventListener("click", cambiarColor, false);

const esconderImg = () => {
  document.getElementById("imagen").style.display = "none";
};

const aparecerImg = () => {
  document.getElementById("imagen").style.display = "block";
};

let btnEsconder = document.getElementById("esconder");
btnEsconder.addEventListener("click", esconderImg, false);

document
  .getElementById("aparecer")
  .addEventListener("click", aparecerImg, false);


  
// explicacion consulta Alejando
const mostrarParrafo = () => {
  document.getElementById("titulo1").innerHTML = document.getElementById(
    "texto"
  ).value;
};

document.getElementById("btn").addEventListener("click", mostrarParrafo, false);
// FIN