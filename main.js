// Builds rows for squares to sit in, uses class grid-row
function buildRow(numberOfRows) {
  let gameBoard = document.querySelector("#gameBoard");
  console.log(gameBoard);
  for (let index = 0; index < numberOfRows; index++) {
    let newRow = document.createElement("div");
    newRow.className = "grid-row";
    gameBoard.appendChild(newRow);
  }
}

function fillRow(numberOfSquares) {
  let rows = document.querySelectorAll(".grid-row");
  rows = Array.from(rows);
  console.log(rows);

  rows.forEach((row) => {
    for (let index = 0; index < numberOfSquares; index++) {
      let newSquare = document.createElement("div");
      newSquare.className = "square";
      row.appendChild(newSquare);
    }
  });
}
//sets default gameboard size of 16x16
buildRow(16);
fillRow(16);

//BEGIN COLORIZATION MODULE
//selects all squares on document
var squares = document.querySelectorAll(".square");

// Makes each square add the hover class which makes BG black
function addHover() {
  squares.forEach((square) => {
    square.addEventListener("mouseover", function (event) {
      event.target.classList.add("hover");
    });
  });
}

//sets random background color
function randomBackground() {
  squares.forEach((square) => {
    square.addEventListener("mouseenter", function (event) {
      if (event.target.classList.contains("greyscale")) {
      } else {
        let possibleColors = ["red", "blue", "green", "yellow"];
        let randomColor =
          possibleColors[Math.floor(Math.random() * possibleColors.length)];
        event.target.style.backgroundColor = randomColor;
      }
    });
  });
}

// increments the opactity by .1 each time a mouse over event fires
function brightenUp() {
  squares.forEach((square) => {
    square.addEventListener("mouseover", function (event) {
      let currentOpacity = event.target.style.opacity;
      console.log("Current Opactity is " + currentOpacity);
      let targetOpacity = Number(currentOpacity) + 0.2;
      console.log(targetOpacity);
      event.target.style.opacity = targetOpacity;
    });
  });
}

addHover();
randomBackground();
brightenUp();

//Clear and reset board
let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function (event) {
  document.querySelector("#gameBoard").innerHTML = "";
  buildRow(16);
  fillRow(16);
  squares = document.querySelectorAll(".square");
  addHover();
  randomBackground();
  brightenUp();
});

//custom board size
let resizeButton = document.querySelector("#resize");
resizeButton.addEventListener("click", function (event) {
  let reqRows = Number(prompt("How many rows?", "1-100"));
  let reqSquares = Number(prompt("How many columns?", "1-100"));
  if (Number.isInteger(reqRows) && Number.isInteger(reqSquares)) {
    document.querySelector("#gameBoard").innerHTML = "";
    buildRow(reqRows);
    fillRow(reqSquares);
    squares = document.querySelectorAll(".square");
    addHover();
    randomBackground();
    brightenUp();
  } else alert("Invalid entry, numbers only.");
});

//greyscale
let greyButton = document.querySelector("#greyscale");
greyButton.addEventListener("click", function (event) {
  squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.classList.toggle("greyscale");
  });
});
