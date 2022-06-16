let players = ['x', 'o'];
let activePlayer = 0;
let board = [];
const boardSize = 5;

function startGame() {
  for (i = 0; i < boardSize; i++) {
    board.push([]);
  }

  for (i = 0; i < boardSize; i++) {
    for (j = 0; j < boardSize; j++) {
      board[i][j] = '';
    }
  }
    renderBoard(board);
}

function click(stringNumber, columnNumber) {
  let arr = [];
  
  for (i = 0; i < boardSize + 2; i++) {
    arr.push([]);
  }

  for (i = 0; i < boardSize + 2; i++) {
    for (j = 0; j < boardSize + 2; j++) {
      arr[i][j] = '';
    }
  }
  
  board[stringNumber][columnNumber] = players[activePlayer];
  renderBoard(board);

  for (i = 0; i < boardSize; i++) {
    for (j = 0; j < boardSize; j++) {
      arr[i+1][j+1] = board[i][j];
    }
  }

  for (i = 1; i < boardSize + 1; i++) {
    for (j = 1; j < boardSize + 1; j++) {
      if (((arr[i-1][j] === arr[i][j] && arr[i][j] === arr[i+1][j]) ||
         (arr[i][j-1] === arr[i][j] && arr[i][j] === arr[i][j+1]) ||
         (arr[i-1][j+1] === arr[i][j] && arr[i][j] === arr[i+1][j-1]) ||
         (arr[i-1][j-1] === arr[i][j] && arr[i][j] === arr[i+1][j+1])) && arr[i][j] !== '') {
           showWinner(players[activePlayer]);
      }
    }
  }
  activePlayer = 1 - activePlayer;
}  