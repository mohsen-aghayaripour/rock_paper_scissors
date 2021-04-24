
function computerPlay(items){
    return items[Math.floor(Math.random() * items.length)];
     
}

let counterPlayer = 0;
let countercomputer = 0;
const container = document.querySelector("#container");
container.style.textAlign = 'center';
const buttons = document.querySelectorAll('button');
let display = document.getElementById('display');
display.style.textAlign = 'center';
display.style.color= 'blue';
let points = document.querySelector('.points');
points.style.textAlign= 'center';
let finalResult = document.querySelector('.finaly');
finalResult.style.textAlign = 'center';

let playerSelection = "hi";

function playRound(){

    function playGame(playerSelection, computerSelection){
        finalResult.textContent = '';
        display.textContent = '';
        if (counterPlayer < 5 && countercomputer < 5){
            if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper"){
                counterPlayer += 1;
                return display.textContent = 'You Win!', points.textContent = 'You have: ' + counterPlayer + " and cump. have: " + countercomputer + " points.";
            }
        
            else if (playerSelection == computerSelection){
                return display.textContent = `It's tie!` , points.textContent = 'You have: ' + counterPlayer + " and cump. have: " + countercomputer + " points.";
            }
            else {
                
                countercomputer += 1;
                return display.textContent = 'You Lose!' , points.textContent = 'You have: ' + counterPlayer + " and cump. have: " + countercomputer + " points.";
    
            };
        }
        else{
            if (counterPlayer > countercomputer){
                countercomputer = 0;
                counterPlayer = 0;
                finalResult.style.color = 'green';
                return finalResult.textContent = "!!***** You Won *****!!";
            }
            else{
                countercomputer = 0;
                counterPlayer = 0;
                finalResult.style.color = 'red';
                return finalResult.textContent = "!!:( You lose :(!!"
            }
        }

    }
    let gamer = ["Rock", "Paper", "Scissors"];
    console.log(playGame(playerSelection, computerPlay(gamer)));
};

buttons.forEach((button) => {
// and for each one we add a 'click' listener
button.addEventListener('click', () => {
    playerSelection = button.id;
    console.log(playRound());

    });
});



