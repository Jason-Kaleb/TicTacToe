const indexCells = document.querySelectorAll('.ttt');
const stat = document.querySelector('#stat');
const btn = document.getElementById('restartBtn');
const winArrays = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let emp = ["","","","","","","","",""];
let playerOne = "X";
let gameStart = false;



function startGame() {
    indexCells.forEach(selectCell => selectCell.addEventListener('click',indexCellClick));
    btn.addEventListener('click',restart);
    stat.textContent = `Player: ${playerOne}'s turn`;
    gameStart = true;
}
function indexCellClick(){
const myDivCell = this.getAttribute("cellIndex");

if (emp[myDivCell] != "" || !gameStart) {
    return;
}

updateGame(this,myDivCell);
seeWinner();

}
function updateGame(cell,index){
    emp[index] = playerOne;
    cell.textContent = playerOne;
}
function changePlayer(){
    playerOne = (playerOne == "X") ? "O" : "X";
    stat.textContent = `Player: ${playerOne}'s turn`;
}
function seeWinner(){

    let roundOneW = false;

    for (let i = 0; i < winArrays.length; i++) {

           const win = winArrays[i];
           const a = emp[win[0]];
           const b = emp[win[1]];
           const c = emp[win[2]];
    
         if (a == "" || b == "" || c == "") {
           continue;
                    }

         if (a == b && b == c) {
            roundOneW = true;
            break;
                    }
}

        if (roundOneW) {
            stat.textContent = `Player: ${playerOne} has Won!!`;
            gameStart = false;
        } 
        else if(!emp.includes("")) {
            stat.textContent = "It IS A Tie!";
            gameStart = false;
        }
        else {
            changePlayer();
        }

}
function restart(){
    playerOne = "X"
    emp = ["","","","","","","","",""];
    stat.textContent = `Player: ${playerOne}'s turn`;
    indexCells.forEach(cell => cell.textContent = "");
    gameStart = true;
}

startGame();