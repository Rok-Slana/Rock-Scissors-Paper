let weapons =['ROCK', 'SCISSORS','PAPER'];
const buttons = document.querySelectorAll('button');
let computerWins = 0;
let playerWins = 0;

//COMPUTER MAKES A GAMBLE
function getComputerChoice(){    
    return weapons[Math.floor(Math.random()*3)];    
}
//PLAYER GIVES HIS BEST
function playerInput(e){    
    let playerSelection = this.innerText;
    let computerSelection = getComputerChoice();
    playSingleGame(playerSelection, computerSelection);
}

//TAKES THE ABOVE AND EVALUATES RESULT
function playSingleGame(player, computer){
    if( player == computer){
        document.getElementById('winner').innerText = 'IT\S A TIE';
    }else if(player == 'ROCK' && computer == 'SCISSORS' || player == 'SCISSORS' && computer == 'PAPER' || player == 'PAPER' && computer == 'ROCK'){
        document.getElementById('winner').innerText = 'YOU WON';
        playerWins++;
    }else{
        document.getElementById('winner').innerText = 'ZEE MACHINE WON';
        computerWins++;
    }

    updateScore(playerWins, computerWins);
}

//SCORE UPDATER
function updateScore(player,computer){
    document.getElementById('score').innerText = player + " : " + computer;
    //CHECK IF GAME IS OVER YET WITH TIME DELAY
    window.setTimeout(checkScore, 1500);
}

//GAME OVER CHECK HERE
function checkScore(){
    if(playerWins==5){
        alert('YOU WON! UNBELIEVABLE !');
        location.reload();
    }else if(computerWins == 5){
        alert('ZEE MACHINE WON! So sad. Try again')
        location.reload();
    }
}

//ATTACH EVENT LISTENERS TO ALL THE BUTTONS HERE
buttons.forEach(button => button.addEventListener('click', playerInput));