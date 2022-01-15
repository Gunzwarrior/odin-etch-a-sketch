let gridSize = 16;
let numberOfSquares = gridSize**2;
console.log(numberOfSquares);
const container = document.querySelector("#container");


function generateGrid(number) {
  for (i = 0; i < number; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("gridSquare");
    container.appendChild(newDiv);
  }
}

generateGrid(numberOfSquares);