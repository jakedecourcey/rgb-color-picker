const MIN_RGB_VALUE = 0;
const MAX_RGB_VALUE = 255;
var targetColor;
var colorSquares = document.querySelectorAll('.color-square');
var mainButton = document.querySelector('.button');
var header = document.querySelector('h1');
var square1 = document.querySelector('.square1');
var square2 = document.querySelector('.square2');
var square3 = document.querySelector('.square3');
var square4 = document.querySelector('.square4');
var square5 = document.querySelector('.square5');
var square6 = document.querySelector('.square6');

function getRandomRGBValue() {
  return Math.floor(Math.random() * ((MAX_RGB_VALUE+1) - MIN_RGB_VALUE) + MIN_RGB_VALUE);
}

function getRandomRGBColor() {
  let RGBColor = [];
  while (RGBColor.length < 3) {
    let value = getRandomRGBValue();
    RGBColor.push(value);
  }
  return RGBColor;
}

function invertRGBColor(color) {
  for (let i = 0; i < color.length; i++) {
    color[i] = 255 - color[i];
  }
  return color;
}

function parseRGBColorToCSS (color) {
  return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

function randomizeColors() {
  for (let i = 0; i < colorSquares.length; i++) {
    colorSquares[i].style.background = parseRGBColorToCSS(getRandomRGBColor());
  }
}

function setTargetColor() {
  targetColor = getRandomRGBColor();
}

function setOneSquareToTargetColor() {
  let chosenSquare = Math.floor(Math.random() * ((5+1) - 0) + 0); //Pick a number between 0 and 5 inclusive
  colorSquares[chosenSquare].style.background = parseRGBColorToCSS(targetColor);
}

function displayTargetColorInHeader() {
  header.innerText = `${targetColor[0]}, ${targetColor[1]}, ${targetColor[2]}`;
}

function checkIfGuessMatchesColor(square) {
  let chosenColor = document.querySelector(`.${square}`).style.background;
  alert(chosenColor);
}

function changeButtonToReset() {
  mainButton.innerText = 'Reset';
}

function resetBoard() {
  setTargetColor();
  randomizeColors();
  setOneSquareToTargetColor();
  displayTargetColorInHeader();
  changeButtonToReset();
}

mainButton.addEventListener('click', resetBoard);
square1.addEventListener('click', checkIfGuessMatchesColor(square1));
square2.addEventListener('click', checkIfGuessMatchesColor(square2));
square3.addEventListener('click', checkIfGuessMatchesColor(square3));
square4.addEventListener('click', checkIfGuessMatchesColor(square4));
square5.addEventListener('click', checkIfGuessMatchesColor(square5));
square6.addEventListener('click', checkIfGuessMatchesColor(square6));
