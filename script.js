document.addEventListener("DOMContentLoaded", function () {
  createBoard();
});

function createBoard() {
  const board = document.getElementById("bingo-board");
  board.innerHTML = "";

  const numbers = generateUniqueNumbers(1, 25);

  for (let i = 0; i < 5; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 5; j++) {
      const cell = document.createElement("td");
      const cellId = `cell-${i}-${j}`;
      cell.setAttribute("id", cellId);
      cell.textContent = numbers[i * 5 + j];

      // Add click event listener to each cell
      cell.addEventListener("click", function () {
        markCell(cellId);
        checkBingo();
      });

      row.appendChild(cell);
    }

    board.appendChild(row);
  }
}

function generateUniqueNumbers(min, max) {
  const numbers = [];
  while (numbers.length < max - min + 1) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum);
    }
  }
  return numbers;
}

function markCell(cellId) {
  const cell = document.getElementById(cellId);
  if (cell.textContent !== "X") {
    cell.textContent = "X";
  }
}

function checkBingo() {
  const horizontalLines = [];
  const verticalLines = [];
  const diagonalLines = [[], []];

  for (let i = 0; i < 5; i++) {
    // Check horizontal lines
    horizontalLines.push([
      `cell-${i}-0`,
      `cell-${i}-1`,
      `cell-${i}-2`,
      `cell-${i}-3`,
      `cell-${i}-4`,
    ]);

    // Check vertical lines
    verticalLines.push([
      `cell-0-${i}`,
      `cell-1-${i}`,
      `cell-2-${i}`,
      `cell-3-${i}`,
      `cell-4-${i}`,
    ]);

    // Check diagonals
    diagonalLines[0].push(`cell-${i}-${i}`);
    diagonalLines[1].push(`cell-${i}-${4 - i}`);
  }

  // Function to check if a line is complete
  function isLineComplete(line) {
    return line.every(
      (cellId) => document.getElementById(cellId).textContent === "X"
    );
  }

  // Check for Bingo
  if (
    // Total of 5 horizontal rows
    horizontalLines.filter((line) => isLineComplete(line)).length === 5 ||
    // Total of 5 vertical columns
    verticalLines.filter((line) => isLineComplete(line)).length === 5 ||
    // Total of 3 horizontal rows and 2 diagonal lines
    (horizontalLines.filter((line) => isLineComplete(line)).length === 3 &&
      diagonalLines.filter((line) => isLineComplete(line)).length === 2) ||
    // Total of 3 vertical columns and 2 diagonal lines
    (verticalLines.filter((line) => isLineComplete(line)).length === 3 &&
      diagonalLines.filter((line) => isLineComplete(line)).length === 2) ||
    // Total of 4 horizontal rows and 1 diagonal line
    (horizontalLines.filter((line) => isLineComplete(line)).length === 4 &&
      diagonalLines.filter((line) => isLineComplete(line)).length === 1) ||
    // Total of 4 vertical columns and 1 diagonal line
    (verticalLines.filter((line) => isLineComplete(line)).length === 4 &&
      diagonalLines.filter((line) => isLineComplete(line)).length === 1) ||
    // Total of 4 horizontal rows and 2 diagonal lines
    (horizontalLines.filter((line) => isLineComplete(line)).length === 4 &&
      diagonalLines.filter((line) => isLineComplete(line)).length === 2) ||
    // Total of 4 vertical lines and 2 diagonal lines
    (verticalLines.filter((line) => isLineComplete(line)).length === 4 &&
      diagonalLines.filter((line) => isLineComplete(line)).length === 2) ||
    // Total of 4 horizontal rows and 1 vertical line
    (horizontalLines.filter((line) => isLineComplete(line)).length === 4 &&
      verticalLines.filter((line) => isLineComplete(line)).length === 1) ||
    // Total of 3 horizontal rows and 2 vertical lines
    (horizontalLines.filter((line) => isLineComplete(line)).length === 3 &&
      verticalLines.filter((line) => isLineComplete(line)).length === 2) ||
    // Total of 2 horizontal rows and 3 vertical lines
    (horizontalLines.filter((line) => isLineComplete(line)).length === 2 &&
      verticalLines.filter((line) => isLineComplete(line)).length === 3) ||
    // Total of 1 horizontal row and 4 vertical lines
    (horizontalLines.filter((line) => isLineComplete(line)).length === 1 &&
      verticalLines.filter((line) => isLineComplete(line)).length === 4) ||
    // Total of 2 diagonal lines, 2 vertical lines, and 1 horizontal line
    (diagonalLines.filter((line) => isLineComplete(line)).length === 2 &&
      verticalLines.filter((line) => isLineComplete(line)).length === 2 &&
      horizontalLines.filter((line) => isLineComplete(line)).length === 1) ||
    // Total of 2 diagonal lines, 1 vertical line, and 2 horizontal lines
    (diagonalLines.filter((line) => isLineComplete(line)).length === 2 &&
      verticalLines.filter((line) => isLineComplete(line)).length === 1 &&
      horizontalLines.filter((line) => isLineComplete(line)).length === 2) ||
    // Total of 1 diagonal line, 3 vertical lines, and 1 horizontal line
    (diagonalLines.filter((line) => isLineComplete(line)).length === 1 &&
      verticalLines.filter((line) => isLineComplete(line)).length === 3 &&
      horizontalLines.filter((line) => isLineComplete(line)).length === 1) ||
    // Total of 1 diagonal line, 1 vertical line, and 3 horizontal lines
    (diagonalLines.filter((line) => isLineComplete(line)).length === 1 &&
      verticalLines.filter((line) => isLineComplete(line)).length === 1 &&
      horizontalLines.filter((line) => isLineComplete(line)).length === 3) ||
      // Total of 1 diagonal line, 2 vertical line, and 2 horizontal lines
    (diagonalLines.filter((line) => isLineComplete(line)).length === 1 &&
    verticalLines.filter((line) => isLineComplete(line)).length === 2 &&
    horizontalLines.filter((line) => isLineComplete(line)).length === 2)
  ) {
    alert("Bingooooooo!");
    return;
  }
}
function resetBoard() {
  createBoard();
}
