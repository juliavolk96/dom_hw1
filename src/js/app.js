// comment this to pass build
// const unusedVariable = "variable";

// // for demonstration purpose only
// export default function demo(value) {
//   return `Demo: ${value}`;
// }

// import '../css/style.css';

// console.log("app.js included");

import goblinImagePNG from "../img/goblin.png";

const gameContainer = document.querySelector(".game-container");
const goblinImage = new Image();
goblinImage.src = goblinImagePNG;

const gridSize = 4; // Размер игрового поля (4x4)
let currentPosition = getRandomPosition(gridSize);

gameContainer.appendChild(goblinImage);

setInterval(() => {
  const newPosition = getRandomPosition(gridSize);
  moveGoblin(newPosition);
}, 1000);

function getRandomPosition(gridSize) {
  const row = Math.floor(Math.random() * gridSize);
  const col = Math.floor(Math.random() * gridSize);
  return { row, col };
}

function moveGoblin(newPosition) {
  const { row: newRow, col: newCol } = newPosition;

  if (newRow === currentPosition.row && newCol === currentPosition.col) {
    return;
  }

  // Удаляем гнома из текущего поля
  gameContainer.removeChild(goblinImage);

  // Перемещаем в новое поле
  currentPosition = newPosition;
  goblinImage.style.gridRow = newRow + 1;
  goblinImage.style.gridColumn = newCol + 1;

  // Добавляем в новое поле
  gameContainer.appendChild(goblinImage);
}
