function computerPlay(items){
    return items[Math.floor(Math.random() * items.length)];
     
}

function playGame(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }

    else if (playerSelection == computerSelection){
        return "it is tie! You chose " + playerSelection + " and com. chose " + computerSelection
    }
    else {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}
let game = ["rock", "paper", "scissors"];
let playerInput = prompt("inter your choice :", "rock");

console.log(playGame(playerInput, computerPlay(game)));