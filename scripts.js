const MIN_RGB_VALUE = 0;
const MAX_RGB_VALUE = 255;
var targetColor;
var correctSquare;
var colorSquares = document.querySelectorAll('.color-square');
var startButton = document.querySelector('.startButton');
var difficultyButton = document.querySelector('.difficultyButton');
var title = document.querySelector('h1');
var correctIndicator = document.querySelector('h2');
var header = document.querySelector('header');
var footer = document.querySelector('footer');
var square0 = document.querySelector('#square0');
var square1 = document.querySelector('#square1');
var square2 = document.querySelector('#square2');
var square3 = document.querySelector('#square3');
var square4 = document.querySelector('#square4');
var square5 = document.querySelector('#square5');
var bottomRow = document.querySelector('.bottom');
var maxSquareID = 6;
var minSquareID = 0;
var difficultyIsHard = true;
var gameInProgress = false;

function setTargetColor() {
  targetColor = getRandomRGBColor();
}

function getRandomRGBColor() {
  let RGBColor = [];
  while (RGBColor.length < 3) {
    let value = getRandomRGBValue();
    RGBColor.push(value);
  }
  return RGBColor;
}

function getRandomRGBValue() {
  return Math.floor(Math.random() * ((MAX_RGB_VALUE + 1) - MIN_RGB_VALUE) + MIN_RGB_VALUE);
}

function randomizeSquareColors() {
  for (let i = 0; i < colorSquares.length; i++) {
    colorSquares[i].style.background = parseRGBColorToCSS(getRandomRGBColor());
  }
}

function setCorrectSquareToTargetColor() {
  colorSquares[correctSquare].style.background = parseRGBColorToCSS(targetColor);
}

function randomizeCorrectSquare() {
  correctSquare = Math.floor(Math.random() * ((maxSquareID) - minSquareID) + minSquareID);
}

function parseRGBColorToCSS(color) {
  return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

function displayTargetColorInHeader() {
  title.innerText = `${targetColor[0]}, ${targetColor[1]}, ${targetColor[2]}`;
}

function checkIfGuessMatchesColor(squareNumber) {
  if (squareNumber === correctSquare) {
    winGame();
  } else {
    eliminateWrongSquare(squareNumber);
  }
}

function changeButtonToReset() {
  startButton.innerText = 'New Game';
}

function toggleDifficulty() {
  if (difficultyIsHard) {
    bottomRow.style.display = 'none';
    difficultyButton.innerText = 'Easy';
    maxSquareID = 3;
    difficultyIsHard = false;
  } else {
    bottomRow.style.display = 'flex';
    difficultyButton.innerText = 'Hard';
    maxSquareID = 6;
    difficultyIsHard = true;
  }

  resetBoard();
}

function resetBoard() {
  setTargetColor();
  randomizeCorrectSquare();
  randomizeSquareColors();
  setCorrectSquareToTargetColor();
  displayTargetColorInHeader();
  changeButtonToReset();
  gameInProgress = true;
}

function eliminateWrongSquare(squareNumber) {
  colorSquares[squareNumber].style.background = 'none';
}

function winGame() {
  header.style.background = parseRGBColorToCSS(targetColor);
  footer.style.background = parseRGBColorToCSS(targetColor);
  correctIndicator.innerText = 'You Win!';
  for (let i = 0; i < colorSquares.length; i++) {
    colorSquares[i].style.background = parseRGBColorToCSS(targetColor);
  }
  gameInProgress = false;
}

startButton.addEventListener('click', resetBoard);
difficultyButton.addEventListener('click', toggleDifficulty);
square0.addEventListener('click', () => {
  if (gameInProgress) {
    checkIfGuessMatchesColor(0)
  }
});
square1.addEventListener('click', () => {
  if (gameInProgress) {
    checkIfGuessMatchesColor(1)
  }
});
square2.addEventListener('click', () => {
  if (gameInProgress) {
    checkIfGuessMatchesColor(2)
  }
});
square3.addEventListener('click', () => {
  if (gameInProgress) {
    checkIfGuessMatchesColor(3)
  }
});
square4.addEventListener('click', () => {
  if (gameInProgress) {
    checkIfGuessMatchesColor(4)
  }
});
square5.addEventListener('click', () => {
  if (gameInProgress) {
    checkIfGuessMatchesColor(5)
  }
});
