const MIN_RGB_VALUE = 0;
const MAX_RGB_VALUE = 255;
var targetColor;
var colorSquares = document.querySelectorAll('.color-square');
var startButton = document.querySelector('.startButton');
var difficultyButton = document.querySelector('.difficultyButton');
var title = document.querySelector('h1');
var correctIndicator = document.querySelector('h2');
var header = document.querySelector('header');
var footer = document.querySelector('footer');
var bottomRow = document.querySelector('.bottom');
var maxSquareID = 6;
var minSquareID = 0;
var difficultyIsHard = true;
var gameInProgress = false;

function setupColorSquares() {
  for (let i = 0; i < colorSquares.length; i++) {
    colorSquares[i].addEventListener('click', () => {
      if (gameInProgress) {
        checkIfGuessMatchesColor(colorSquares[i]);
      }
    });
  }
}

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

function checkIfGuessMatchesColor(square) {
  let squareNumber = square.style.backgroundColor;
  if (squareNumber === parseRGBColorToCSS(targetColor)) {
    winGame();
  } else {
    eliminateWrongSquare(square);
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

function eliminateWrongSquare(square) {
  square.style.background = 'none';
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

setupColorSquares();
startButton.addEventListener('click', resetBoard);
difficultyButton.addEventListener('click', toggleDifficulty);
