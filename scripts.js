const MIN_RGB_VALUE = 0;
const MAX_RGB_VALUE = 255;
var targetColor;
var colorSquares = document.querySelectorAll('.color-square');

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

function setHeaderToTargetColor() {
  document.querySelector('header').style.background = parseRGBColorToCSS(targetColor);
  document.querySelector('h1').style.color = parseRGBColorToCSS(invertRGBColor(targetColor));
}

function setTargetColor() {
  targetColor = getRandomRGBColor();
}

function setOneSquareToTargetColor() {
  let chosenSquare = Math.floor(Math.random() * ((5+1) - 0) + 0); //Pick a number between 0 and 5 inclusive
  colorSquares[chosenSquare].style.background = parseRGBColorToCSS(targetColor);
}

function resetBoard() {
  setTargetColor();
  randomizeColors();
  setOneSquareToTargetColor();
  displayTargetColorInHeader();
}
