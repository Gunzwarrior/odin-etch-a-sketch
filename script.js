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

let currentStyle;
function colorSquare(e) {
  // e.target.classList.add("gridSquareColored"); -Standard mode
  
  // let rValue = Math.floor(Math.random()*256); -Rainbow mode
  // let gValue = Math.floor(Math.random()*256);
  // let bValue = Math.floor(Math.random()*256);
  // e.target.style.backgroundColor = `rgb(${rValue}, ${gValue}, ${bValue})`;
  
  currentStyle = e.target.style.cssText;
  if (currentStyle.includes("rgb(230, 230, 230)")) {
    e.target.style.backgroundColor = "rgb(204, 204, 204)";
  } else if (currentStyle.includes("rgb(204, 204, 204)")) {
    e.target.style.backgroundColor = "rgb(179, 179, 179)";
  } else if (currentStyle.includes("rgb(179, 179, 179)")) {
    e.target.style.backgroundColor = "rgb(153, 153, 153)";
  } else if (currentStyle.includes("rgb(153, 153, 153)")) {
    e.target.style.backgroundColor = "rgb(128, 128, 128)";
  } else if (currentStyle.includes("rgb(128, 128, 128)")) {
    e.target.style.backgroundColor = "rgb(102, 102, 102)";
  } else if (currentStyle.includes("rgb(102, 102, 102)")) {
    e.target.style.backgroundColor = "rgb(77, 77, 77)";
  } else if (currentStyle.includes("rgb(77, 77, 77)")) {
    e.target.style.backgroundColor = "rgb(51, 51, 51)";
  } else if (currentStyle.includes("rgb(51, 51, 51)")) {
    e.target.style.backgroundColor = "rgb(26, 26, 26)";
  } else if (currentStyle.includes("rgb(26, 26, 26)")) {
    e.target.style.backgroundColor = "rgb(0, 0, 0)";
  } else {
    e.target.style.backgroundColor = "rgb(230, 230, 230)";
  }
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