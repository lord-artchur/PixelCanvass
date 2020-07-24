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
buildRow(16);
fillRow(16);
