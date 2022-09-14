let weapons =['ROCK', 'SCISSORS','PAPER'];
const buttons = document.querySelectorAll('button');
let computerWins = 0;
let playerWins = 0;

function getComputerChoice(){    
    return weapons[Math.floor(Math.random()*3)];    
}

function playerInput(e){    
    let playerSelection = this.innerText;
    let computerSelection = getComputerChoice();
    playSingleGame(playerSelection, computerSelection);
}

function playSingleGame(player, computer){
    if( player == computer){
        console.log('It\'s a tie');
    }else if(player == 'ROCK' && computer == 'SCISSORS' || player == 'SCISSORS' && computer == 'PAPER' || player == 'PAPER' && computer == 'ROCK'){
        console.log("you win");
        playerWins++;
    }else{
        console.log('you loose');
        computerWins++;
    }
    console.log('PLAYER SELECTEED : ' + player);
    console.log('COMPUTER SELECTEED : ' + computer);
    console.log('Current score : Player: ' + playerWins +' // Computer : ' + computerWins)

}
buttons.forEach(button => button.addEventListener('click', playerInput));

