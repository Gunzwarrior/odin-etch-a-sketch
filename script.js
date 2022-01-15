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
  console.log(gridSize);
  gridSize = parseInt(prompt("Please enter a number between 4 and 100:"));
  while (isNaN(gridSize) || gridSize < 4 || gridSize > 100) {
    gridSize = parseInt(prompt("Please enter a number between 4 and 100:"));
  }
  numberOfSquares = gridSize**2;
  const gridDelete = document.querySelectorAll(".gridSquare");
  gridDelete.forEach((gridSquare) => {
    container.removeChild(gridSquare);
  })
  generateGrid(numberOfSquares);
};

function colorSquare(e) {
  e.target.classList.add("gridSquareColored");
}

function generateGrid(number) {
  for (i = 0; i < number; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("gridSquare");
    newDiv.style.width = `${(1/gridSize)*100}%`;
    newDiv.addEventListener("mouseenter", colorSquare)
    container.appendChild(newDiv);
  }
}

generateGrid(numberOfSquares);