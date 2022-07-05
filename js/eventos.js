
// function cargarPagina() {

  
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
// Eventos con addEventListener
  // document
  //   .getElementById("aparecer")
  //   .addEventListener("click", aparecerImg, false);

    // Eventos con funciones comunes
  // document.getElementById('aparecer').click = aparecerImg();
  
  // Eventos con funciones anonimas
  // document.getElementById('aparecer').click = function(){
    //   document.getElementById("imagen").style.display = "block";
    // };

    // Eventos con funciones flecha
    document.getElementById('aparecer').onclick = () => {
      document.getElementById("imagen").style.display = "block";
    };

    // Modo de seleccion del primer elemento que aparece en el HTML
    // document.querySelector('.nombreclase')

    // Modo de seleccion de todos los elementos que aparecen en el HTML
    // document.querySelector('.nombreclase')

    // obtencion de elementos del DOM
    // document.getElementById('id')
    // document.getElementsByClassName('clase')
    // document.getElementsByTagName('tag')


// }



// // explicacion consulta Alejando
// const mostrarParrafo = () => {
//   document.getElementById("titulo1").innerHTML = document.getElementById(
//     "texto"
//   ).value;
// };

// document.getElementById("btn").addEventListener("click", mostrarParrafo, false);
// // FIN
