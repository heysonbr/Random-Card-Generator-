/* eslint-disable */

// Función para generar un número aleatorio en un rango específico
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para seleccionar aleatoriamente un elemento de un array
function getRandomElement(array) {
  return array[getRandomNumber(0, array.length - 1)];
}

// Función para actualizar la carta aleatoriamente
function updateCard() {
  const suits = ["heart", "diamond", "club", "spade"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  const randomSuit = getRandomElement(suits);
  const randomValue = getRandomElement(values);

  const valor = document.querySelector(".valor");
  const forma = document.querySelector("#forma");
  const forma2 = document.querySelector("#forma2");

  forma.className = randomSuit;

  forma2.className = randomSuit;

  valor.innerHTML = randomValue;
  // Llamada a la función updateCard cuando se hace click en el botón
  const button = document.querySelector("#button");
  button.addEventListener("click", updateCard);
  const card = document.getElementById("randomCard");
  const widthInput = document.getElementById("widthInput").value;
  const heightInput = document.getElementById("heightInput").value;
  card.style.width = widthInput ? `${widthInput}px` : "400px";
  card.style.height = heightInput ? `${heightInput}px` : "500px";
  valor.style.fontSize = widthInput ? `${widthInput / 3}px` : "150px";

  //const button2 = document.querySelector("#button2");
  //button2.addEventListener("click", peque);

  //const button3 = document.querySelector("#button3");
  //button3.addEventListener("click", peque);

  //const button4 = document.querySelector("#button4");
  //button4.addEventListener("click", peque);

  //const heart = document.querySelector(".heart");
  //const diamond = document.querySelector(".diamond");
  //const club = document.querySelector(".club");
  //const spade = document.querySelector(".spade");

  // heart.style.fontSize = widthInput ? `${widthInput / 3}px` : "150px";
  //diamond.style.fontSize = widthInput ? `${widthInput / 3}px` : "150px";
  // club.style.fontSize = widthInput ? `${widthInput / 3}px` : "150px";
  // spade.style.fontSize = widthInput ? `${widthInput / 3}px` : "150px";
}

function changeCardSize2() {
  const button2 = document.querySelector("#button2");
  card.style.width = "200px";
  card.style.height = "300px";
  button2.addEventListener("click", peque);
}

function changeCardSize3() {
  const button3 = document.querySelector("#button3");
  card.style.width = "200px";
  card.style.height = "300px";
  button3.addEventListener("click", peque);
}

function changeCardSize4() {
  const button4 = document.querySelector("#button4");
  card.style.width = "200px";
  card.style.height = "300px";
  button4.addEventListener("click", peque);
}

window.onload = () => {
  let contador = 10;
  const contadorElemento = document.querySelector("#contador");

  // Función para actualizar el contador
  function actualizarContador() {
    contadorElemento.innerHTML = contador;
    contador--;
    if (contador < 0) {
      contador = 10;
    }
  }

  // Función para actualizar la carta y reiniciar el contador
  function updateCardAndResetCounter() {
    updateCard();
    contador = 10;
  }

  // Llamada inicial para mostrar una carta al cargar la página
  updateCardAndResetCounter();
  setInterval(actualizarContador, 1000); // Actualiza el contador cada segundo

  setInterval(updateCardAndResetCounter, 11000); // Genera una nueva carta y reinicia el contador cada 10 segundos

  // Llamada a la función updateCardAndResetCounter cuando se hace click en el botón
  const button = document.querySelector("#button");
  button.addEventListener("click", updateCardAndResetCounter);
};
