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

//custom board size and clear
let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function (event) {
  let reqRows = prompt("How many rows?");
  let reqSquares = prompt("How many columns?");
  document.querySelector("#gameBoard").innerHTML = "";
  buildRow(reqRows);
  fillRow(reqSquares);
});

//BEGIN COLORIZATION MODULE
//selects all squares on document
let squares = document.querySelectorAll(".square");

// Makes each square add the hover class which makes BG black
squares.forEach((square) => {
  square.addEventListener("mouseover", function (event) {
    event.target.classList.add("hover");
  });
});

//sets random background color
squares.forEach((square) => {
  square.addEventListener("mouseenter", function (event) {
    let possibleColors = ["red", "blue", "green", "yellow"];
    let randomColor =
      possibleColors[Math.floor(Math.random() * possibleColors.length)];
    event.target.style.backgroundColor = randomColor;
  });
});

// increments the opactity by .1 each time a mouse over event fires
squares.forEach((square) => {
  square.addEventListener("mouseover", function (event) {
    let currentOpacity = event.target.style.opacity;
    console.log("Current Opactity is " + currentOpacity);
    let targetOpacity = Number(currentOpacity) + 0.2;
    console.log(targetOpacity);
    event.target.style.opacity = targetOpacity;
  });
});
