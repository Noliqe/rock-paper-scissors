
//Computer draws random string from myArray
function computerPlay(){
    return myArray[Math.floor(Math.random()*myArray.length)];
}

let myArray = ['rock', 'paper', 'scissors'];
computerPlay(myArray);


//Returns game text, return win or lose to result array and adds computerButtons effect
function playGame(playerSelection, computerSelection) {
   if (playerSelection == 'rock' && computerSelection == 'rock') {
      gameOutput.textContent = "It\'s a tie!\r\n";
      gameOutput.textContent += "Rock ties with rock";
      computerOne.setAttribute('style', 'background-color: transparent; box-shadow:  0 0 5px #f9faf8, 0 0 15px #f9faf8, 0 0 30px #f9faf8;');
      removeRockAnimation();
      return;
   } else if (playerSelection == 'rock' && computerSelection == 'paper') {
      gameOutput.textContent = "You lost!\r\n";
      gameOutput.textContent += "Rock is beaten by paper";
      computerTwo.setAttribute('style', 'background-color: transparent; box-shadow:  0 0 5px #f9faf8, 0 0 15px #f9faf8, 0 0 30px #f9faf8;');
      removePaperAnimation();
      return('lose');
   } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
      gameOutput.textContent = "You won\r\n";
      gameOutput.textContent += "Rock beats scissors";
      computerThree.setAttribute('style', 'background-color: transparent; box-shadow:  0 0 5px #f9faf8, 0 0 15px #f9faf8, 0 0 30px #f9faf8;');
      removeScissorsAnimation();
      return('win');
   } else if (playerSelection == 'paper' && computerSelection == 'rock') {
      gameOutput.textContent = "You won\r\n";
      gameOutput.textContent += "Paper beats rock";
      computerOne.setAttribute('style', 'background-color: transparent; box-shadow:  0 0 5px #f9faf8, 0 0 15px #f9faf8, 0 0 30px #f9faf8;');
      removeRockAnimation();
      return('win');
   } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
      gameOutput.textContent = "You lost!\r\n";
      gameOutput.textContent += "Paper is beaten by scissors";
      computerThree.setAttribute('style', 'background-color: transparent; box-shadow:  0 0 5px #f9faf8, 0 0 15px #f9faf8, 0 0 30px #f9faf8;');
      removeScissorsAnimation();
      return('lose');
   } else if (playerSelection == 'paper' && computerSelection == 'paper') {
      gameOutput.textContent = "It\'s a tie!\r\n";
      gameOutput.textContent += "Paper ties with paper";
      computerTwo.setAttribute('style', 'background-color: transparent; box-shadow:  0 0 5px #f9faf8, 0 0 15px #f9faf8, 0 0 30px #f9faf8;');
      removePaperAnimation();
      return;
   } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
      gameOutput.textContent = "You lost!\r\n";
      gameOutput.textContent += "Scissors is beaten by rock";
      computerOne.setAttribute('style', 'background-color: transparent; box-shadow:  0 0 5px #f9faf8, 0 0 15px #f9faf8, 0 0 30px #f9faf8;');
      removeRockAnimation();
      return('lose');
   } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
      gameOutput.textContent = "You won\r\n";
      gameOutput.textContent += "Scissors beats paper";
      computerTwo.setAttribute('style', 'background-color: transparent; box-shadow:  0 0 5px #f9faf8, 0 0 15px #f9faf8, 0 0 30px #f9faf8;');
      removePaperAnimation();
      return('win');
   } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
      gameOutput.textContent = "It\'s a tie!\r\n";
      gameOutput.textContent += "Scissors ties with scissors";
      computerThree.setAttribute('style', 'background-color: transparent; box-shadow:  0 0 5px #f9faf8, 0 0 15px #f9faf8, 0 0 30px #f9faf8;');
      removeScissorsAnimation();
      return;
   }
}


const computerSelection = computerPlay();

//Person buttons
const buttonOne = document.querySelector('#btnOne');
const buttonTwo = document.querySelector('#btnTwo');
const buttonThree = document.querySelector('#btnThree');

buttonOne.setAttribute('style', 'background-color: transparent;');
buttonTwo.setAttribute('style', 'background-color: transparent;');
buttonThree.setAttribute('style', 'background-color: transparent;');

//Computer buttons
const computerOne = document.querySelector('#compOne');
const computerTwo = document.querySelector('#compTwo');
const computerThree = document.querySelector('#compThree');

computerOne.setAttribute('style', 'background-color: transparent;');
computerTwo.setAttribute('style', 'background-color: transparent;');
computerThree.setAttribute('style', 'background-color: transparent;');

//Reset button
const resetButton = document.querySelector('#resetBtn');
resetButton.setAttribute('style', 'display: none;');

//Reset button click event
resetButton.addEventListener('click', () => {
   gameOutput.textContent = "Choose Rock Paper Scissors \r\n";
   gameOutput.textContent += "First to score 5 points wins the game";
   (inputWon.textContent) = 0;
   (inputLost.textContent) = 0;
   result = [];
   resetButton.setAttribute('style', 'display: none;');
   return;
})

//Person buttons click event
buttonOne.addEventListener('click', () => {
   if ((inputWon.textContent) == 5 || (inputLost.textContent) == 5) {
      buttonOne = false;
      return;
   } else {
   let playerSelection = 'rock';
   result.push(playGame(playerSelection, computerPlay()));
   return(sendResult());
   }
});
buttonTwo.addEventListener('click', () => {
   if ((inputWon.textContent) == 5 || (inputLost.textContent) == 5) {
      buttonOne = false;
      return;
   } else {
    let playerSelection = 'paper';
    result.push(playGame(playerSelection, computerPlay()));
    return(sendResult());
   }
});
buttonThree.addEventListener('click', () => {
   if ((inputWon.textContent) == 5 || (inputLost.textContent) == 5) {
      buttonOne = false;
      return;
   } else {
    let playerSelection = 'scissors';
    result.push(playGame(playerSelection, computerPlay()));
    return(sendResult());
   }
});

//Score text
const paraWon = document.querySelector('#pWon');
const paraLose = document.querySelector('#pLost');

paraWon.textContent = 'Score:';
paraLose.textContent = 'Score:';

//Score number
const inputWon = document.querySelector('#inptWon');
const inputLost = document.querySelector('#inptLost');



//Array where win or lose is stored in
let result = [];


//changes score number and reset result array
function sendResult() {
     if (result == 'lose' && (inputLost.textContent == 4)) {
        (inputLost.textContent) = 5;
        result = [];
        gameOutput.textContent = "You\'ve lost against the computer! \r\n";
         gameOutput.textContent += "Try again!";
        resetButton.setAttribute('style', 'display: flex;');
        return;
        } else if (result == 'lose' && (inputLost.textContent == 3)) {
                (inputLost.textContent) = 4;
                result = [];
                return;
            } else if (result == 'lose' && (inputLost.textContent == 2)) {
                    (inputLost.textContent) = 3;
                    result = [];
                    return;
                } else if (result == 'lose' && (inputLost.textContent == 1)) {
                        (inputLost.textContent) = 2;
                        result = [];
                        return;
                    } else if (result == 'lose' && (inputLost.textContent == 0)){
                        (inputLost.textContent) = 1;
                        result = [];
                        return;
    } else if (result == 'win' && (inputWon.textContent == 4)) {
            (inputWon.textContent) = 5;
            result = [];
            gameOutput.textContent = "You\'ve won against the computer! \r\n";
            gameOutput.textContent += "Good job!";
            resetButton.setAttribute('style', 'display: flex;');
            return;
        } else if (result == 'win' && (inputWon.textContent == 3)) {
                (inputWon.textContent) = 4;
                result = [];
                return;
            } else if (result == 'win' && (inputWon.textContent == 2)) {
                    (inputWon.textContent) = 3;
                    result = [];
                    return;
                } else if (result == 'win' && (inputWon.textContent == 1)) {
                        (inputWon.textContent) = 2;
                        result = [];
                        return;
                    } else if (result == 'win' && (inputWon.textContent == 0)){
                            (inputWon.textContent) = 1;
                            result = [];
                            return;
                    } else if (result == 'draw'){
                              result = [];
                              return;
                    } else {
                     result = [];
                     return;
                    }
}   

//Score before game begins
inputWon.textContent = 0;
inputLost.textContent = 0;

//Game display text
const gameOutput = document.querySelector('#textOutput');
gameOutput.setAttribute('style', 'white-space: pre; text-align: center;');
gameOutput.textContent = "Choose Rock Paper Scissors \r\n";
gameOutput.textContent += "First to score 5 points wins the game";

//Function remove computer effect
function removeRockAnimation() {
   setTimeout(() => {computerOne.setAttribute('style', 'background-color: transparent;'); }, 800);
   return;
}

function removePaperAnimation() {
   setTimeout(() => {computerTwo.setAttribute('style', 'background-color: transparent;'); }, 800);
   return;
}

function removeScissorsAnimation() {
   setTimeout(() => {computerThree.setAttribute('style', 'background-color: transparent;'); }, 800);
   return;
}
