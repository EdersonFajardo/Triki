const cells = document.querySelectorAll('.cell');
const boardElement = document.getElementById('board');
const resetButton = document.getElementById('reset-button');

// Función para actualizar la interfaz de usuario según el estado del tablero
function updateUI() {
    cells.forEach((cell, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        cell.textContent = board[row][col];
        cell.classList.remove('playerX', 'playerO'); // Elimina clases anteriores
        if (board[row][col] === 'X') {
            cell.classList.add('playerX');
        } else if (board[row][col] === 'O') {
            cell.classList.add('playerO');
        }
    });
}

// Función para mostrar un mensaje de victoria
function showVictoryMessage(winner) {
    alert(`¡El jugador ${winner} ha ganado!`);
}

// Función para mostrar un mensaje de empate
function showDrawMessage() {
    alert('¡Es un empate!');
}

// Agregar un evento de clic a un botón de reinicio
resetButton.addEventListener('click', () => {
    resetGame(); // Llama a la función para reiniciar el juego.
    updateUI(); // Actualiza la interfaz de usuario.
});

// Agregar lógica para verificar si alguien ganó después de un movimiento
cells.forEach((cell, index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;

    cell.addEventListener('click', () => {
        // Verificar si la casilla está vacía antes de realizar un movimiento
        if (board[row][col] === '') {
            // Realizar un movimiento
            makeMove(row, col);

            // Actualizar la interfaz de usuario
            updateUI();

            // Verificar si alguien ganó
            const winner = checkWinner();
            if (winner) {
                showVictoryMessage(winner); // Muestra el mensaje de victoria.
                resetGame(); // Reiniciar el juego después de que alguien gane.
            } else if (checkDraw()) {
                showDrawMessage(); // Muestra el mensaje de empate.
                resetGame(); // Reiniciar el juego en caso de empate.
            }
        }
    });
});

// Inicializar la interfaz de usuario
updateUI();

