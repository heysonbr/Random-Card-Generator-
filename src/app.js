/* eslint-disable */
import "./style.css";
// Función para generar un número aleatorio en un rango específico
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para seleccionar aleatoriamente un elemento de un array
function getRandomElement(array) {
  return array[getRandomNumber(0, array.length - 1)];
}
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
  "A"
];

// Función para obtener el símbolo del traje

const button = document.querySelector("#button");
// Función para actualizar la carta aleatoriamente
function updateCard() {
  //Variables donde se guarda el valor aleatorio de la carta
  const randomSuit = getRandomElement(suits);
  const randomValue = getRandomElement(values);
  //Variables donde se guarda el elemento del html donde se va a mostrar el valor aleatorio de la carta
  const valor = document.querySelector(".valor");
  const forma = document.querySelector("#forma");
  const forma2 = document.querySelector("#forma2");

  forma.className = randomSuit;
  forma2.className = randomSuit;

  valor.innerHTML = randomValue;
  //**Llamada a la función updateCard cuando se hace click en el botón**//
  const button = document.querySelector("#button");
  button.addEventListener("click", updateCard);
}

function input() {
  //Variables que modifican la carta con el input
  const valor = document.querySelector(".valor");
  const card = document.getElementById("randomCard");
  const widthInput = document.getElementById("widthInput").value;
  const heightInput = document.getElementById("heightInput").value;

  card.style.width = widthInput ? `${widthInput}px` : "400px";
  card.style.height = heightInput ? `${heightInput}px` : "500px";
  valor.style.fontSize = widthInput ? `${widthInput / 3}px` : "100px";
  button.addEventListener("click", updateCard);
}
const widthInput = document.getElementById("widthInput").value;
function input2() {
  const forma = document.querySelector("#forma");
  const forma2 = document.querySelector("#forma2");

  let nuevoTamanio = widthInput ? `${widthInput / 3}px` : "120px";

  forma.style.setProperty("--tamanio-after", nuevoTamanio);
  forma2.style.setProperty("--tamanio-after", nuevoTamanio);
  button.addEventListener("click", updateCard);
}

document.addEventListener("DOMContentLoaded", () => {
  input2();
});

function botones() {
  const buttonSmall = document.querySelector("#buttonSmall");
  const buttonMedium = document.querySelector("#buttonMedium");
  const buttonLarge = document.querySelector("#buttonLarge");
  const card = document.getElementById("randomCard");

  buttonSmall.addEventListener("click", () => {
    card.style.width = "200px";
    card.style.height = "300px";
  });

  buttonMedium.addEventListener("click", () => {
    card.style.width = "400px";
    card.style.height = "500px";
  });

  buttonLarge.addEventListener("click", () => {
    card.style.width = "700px";
    card.style.height = "800px";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  botones();
});

/**
 * Handles the input and updates the card size accordingly.
 */

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
  button.addEventListener("click", input);
};
