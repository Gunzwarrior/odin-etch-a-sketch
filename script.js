let gridSize = 16;
let numberOfSquares = gridSize**2;
console.log(numberOfSquares);
const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetGrid);

function resetGrid() {
  const gridReset = document.querySelectorAll(".gridSquareColored");
  gridReset.forEach((gridSquare) => {
    gridSquare.classList.remove("gridSquareColored");
  });
};

function colorSquare(e) {
  e.target.classList.add("gridSquareColored");
}

function generateGrid(number) {
  for (i = 0; i < number; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("gridSquare");
    newDiv.addEventListener("mouseenter", colorSquare)
    container.appendChild(newDiv);
  }
}

generateGrid(numberOfSquares);