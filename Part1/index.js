// console.log('Hello World')
let board = []

function play(clickedId){
  let playerSpan = document.getElementById('player')
  const clickedElement = document.getElementById(clickedId)

  if(board[clickedId] === undefined){
  

  if(playerSpan.innerText === 'X'){
    playerSpan.innerText = 'O'
    clickedElement.innerText = 'X'
    board[clickedId] = 'X'
  } else {
    playerSpan.innerText = 'X'
    clickedElement.innerText = 'O'
    board[clickedId] = 'O'
  }
  checkWinner()
 }
}

function checkWinner(){
  const topLeft = board[0];
  const topCenter = board[1];
  const topRight = board[2];
  const middleLeft = board[3];
  const middleCenter = board[4];
  const middleRight = board[5];
  const bottomLeft = board[6];
  const bottomCenter = board[7];
  const bottomRight = board[8];

  // CHECKS ALL WINNING COMBINATIONS
  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    decWinner(topLeft)
    return;
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    decWinner(middleLeft)
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    decWinner(bottomLeft)
    return;
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    decWinner(topLeft)
    return;
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    decWinner(topCenter)
    return;
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    decWinner(topRight)
    return;
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    decWinner(topLeft)
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    decWinner(bottomLeft)
    return;
  }

  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    setTimeout(function(){alert("Cat's game, there is no winner")}, 100)
    reset()
  }
}

// Black Diamond
function reset(){
  board = []
  for(let i = 0; i < 9; i++){
    document.getElementById(i).innerText = ''
  }
}

function decWinner(winner){
  setTimeout(function(){alert(`${winner} is the winner`)}, 100)
  // reset()
  for(let i = 0; i < 9; i++){
    board[i] = ''
  }
}