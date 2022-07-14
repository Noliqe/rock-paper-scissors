//#Function computerPlay that randomize "Rock, Paper, Scissors" and check with console//


function computerPlay(){
    return myArray[Math.floor(Math.random()*myArray.length)];
}

let myArray = ['rock', 'paper', 'scissors'];
computerPlay(myArray);

//alert(computerPlay())//

//#Function that plays a single round with two parameters, "playerSelection and computerSelection" with a return string for winner/loser//


function playRound(playerSelection, computerSelection) {
     playerSelection = playerSelection.toLowerCase();
     if (playerSelection == 'rock' && computerSelection == 'rock') {
        return('draw');
     } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return('lose');
     } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return('win');
     } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return('win');
     } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return('lose');
     } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return('draw');
     } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return('lose');
     } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return('win');
     } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return('draw');
     }
}

const playerSelection = prompt("let's play a game! Rock, scissors or paper");
const computerSelection = computerPlay();

//#Function for game within playRound function and play 5 rounds that keep score and reports winner/loser //

let result = []
function game() {
    for (let i = 0; i < 5; i++) {
        result.push(playRound(playerSelection, computerPlay()));
    }
    return result
}
alert(game());
let numOfWin = result.filter(x => x === "win").length;
let numOfDraw = result.filter(x => x === "draw").length;
let numOfLose = result.filter(x => x === "lose").length;

//#Function for winner/loser report

function resultTotal(result){
    if (numOfWin >= 3) {
        return('You won!');
    } else if (numOfWin == 2 && numOfDraw >= 2){
        return('You won!');
    } else if (numOfWin == 1 && numOfDraw == 4){
        return('You won!');
    } else if (numOfDraw == 5){
        return('You tied!');
    } else if (numOfWin == 1 && numOfDraw == 3){
        return('You tied!');
    } else if (numOfWin == 2 && numOfDraw == 1){
        return('You tied!');
    } else {
        return('You lost!');
    }
}


alert(resultTotal(result));


