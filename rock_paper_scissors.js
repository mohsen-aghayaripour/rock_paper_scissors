
function computerPlay(items){
    return items[Math.floor(Math.random() * items.length)];
     
}

function game(){
    let counterPlayer = 0
    let countercomputer = 0
    function playGame(playerSelection, computerSelection){
        playerSelection = playerSelection.toLowerCase();
    
        if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
            counterPlayer += 1;
            return "You Win! " + capitalizeFirst(playerSelection) + " beats " + capitalizeFirst(computerSelection) + ", You have: " + counterPlayer + " and coumputer have: " + countercomputer + " points";
        }
    
        else if (playerSelection == computerSelection){
            return "it is tie! You chose " + capitalizeFirst(playerSelection) + " and com. chose " + capitalizeFirst(computerSelection) + ", You have: " + counterPlayer + " and coumputer have: " + countercomputer + " points";
        }
        else {
            countercomputer += 1;
            return "You Lose! " + capitalizeFirst(computerSelection) + " beats " + capitalizeFirst(playerSelection) + ", You have: " + counterPlayer + " and coumputer have: " + countercomputer + " points";
        }
    }
    for (let i = 0; i < 100; i++){
    
        if (countercomputer == 5){
            return "You Lose! computer : " + countercomputer + " and you: " + counterPlayer;
        }
        else if (counterPlayer == 5){
            return "You Won! you: " + counterPlayer + " and computer: " + countercomputer;
        }
        let playerInput = prompt("inter your choice :", "rock");
        console.log(playGame(playerInput, computerPlay(gamer)));
    }
}
function capitalizeFirst(word){
    word = word.toLowerCase()
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase())
}
let gamer = ["rock", "paper", "scissors"];


console.log(game());