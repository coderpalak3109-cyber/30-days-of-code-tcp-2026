const boardElement = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('statusText');
const overlay = document.getElementById('overlay');
const winnerText = document.getElementById('winnerText');
const playAgainBtn = document.getElementById('playAgainBtn');
const resetBtn = document.getElementById('resetBtn');

let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const xIcon = `
    <svg viewBox="0 0 100 100">
        <path class="path-x" d="M20,20 L80,80 M80,20 L20,80" />
    </svg>`;
const oIcon = `
    <svg viewBox="0 0 100 100">
        <circle class="path-o" cx="50" cy="50" r="35" />
    </svg>`;

function handleCellClick(e) {
    const cell = e.target;
    const index = cell.getAttribute('data-index');

    if (gameState[index] !== "" || !gameActive) return;

    gameState[index] = currentPlayer;
    cell.innerHTML = currentPlayer === "X" ? xIcon : oIcon;
    
    checkResult();
}

function checkResult() {
    let roundWon = false;

    for (let condition of winConditions) {
        let a = gameState[condition[0]];
        let b = gameState[condition[1]];
        let c = gameState[condition[2]];
        if (a === "" || b === "" || c === "") continue;
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        showEndScreen(`${currentPlayer} Dominates!`);
        gameActive = false;
        return;
    }

    if (!gameState.includes("")) {
        showEndScreen("It's a Stalemate!");
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.innerText = `Player ${currentPlayer}'s Turn`;
}

function showEndScreen(message) {
    winnerText.innerText = message;
    setTimeout(() => {
        overlay.classList.add('active');
    }, 600);
}

function restartGame() {
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    statusText.innerText = "Player X's Turn";
    overlay.classList.remove('active');
    cells.forEach(cell => cell.innerHTML = "");
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
playAgainBtn.addEventListener('click', restartGame);
resetBtn.addEventListener('click', restartGame);