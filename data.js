// Representación del tablero (3x3)
const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Jugador actual (X o O)
let currentPlayer = 'X';

// Función para alternar entre los jugadores X y O
function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Función para realizar un movimiento
function makeMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        togglePlayer();
    }
}

// Función para verificar si alguien ganó
function checkWinner() {
    // Verificar filas, columnas y diagonales
    for (let i = 0; i < 3; i++) {
        // Verificar filas
        if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
            return currentPlayer;
        }
        // Verificar columnas
        if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
            return currentPlayer;
        }
    }

    // Verificar diagonales
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
        return currentPlayer;
    }
    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
        return currentPlayer;
    }

    // Si no hay ganador
    return null;
}

// Función para verificar si hay un empate
function checkDraw() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === '') {
                return false;
            }
        }
    }
    return true;
}

// Función para reiniciar el juego
function resetGame() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            board[row][col] = '';
        }
    }
    currentPlayer = 'X';
}

