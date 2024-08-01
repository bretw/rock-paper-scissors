
function getComputerChoice() {  //get a random int between 1 and 3
    let x = Math.random();
    
    if (x <= (1/3)) {
        return 1;
        } else if (x <= (2/3)) {
        return 2;
        } else {return 3;}
    };
function playRound(HumanChoice) {  //play a round   "It's a tie!"  "You lost!"   "You won!"
    let x = HumanChoice;
    if (x === null) {
        return null;
    }
    let y = getComputerChoice();
    returnComputer(y);
    if (x===1) {
        console.log("You: Rock ");
        results.textContent +="     You: Rock ";
        if (y===1) {
            console.log("It's a tie!");
            return "tie";
        } else if (y===2) {
            console.log("You lost!");
            return "loss";
        } else {
            console.log("You won!");
            return "win";
        }
    } else if (x===2) {
        console.log("You: Paper");
        results.textContent += "    You: Paper ";
        if (y===1) {
            console.log("You win!");
            return "win";
        } else if (y===2) {
            console.log("Tie!");
            return "tie";
        } else {
            console.log("You lost!");
            return "loss";
        }
      }  else {
        console.log("You: Scissors");
        results.textContent += "    You: Scissors ";
            if (y===1) {
                console.log("You lost!");
                     return "loss";
            } else if (y===2) {
                console.log("You win!");
                            return "win";
            } else {
                console.log("Tie!")
                        return "tie";
            }
    }
};
function returnComputer(y) {
    if (y===1) {
results.textContent = " Computer: Rock ";
}  else if (y===2) {
results.textContent = " Computer: Paper ";
 } else if (y==3) {
results.textContent = " Computer: Scissors ";
 }
};
let humanScore = 0;
let computerScore = 0;

function playGame(choice) {
    let winorlose = playRound(choice);
        if (winorlose === "win") {
        humanScore++;
    } if (winorlose === "loss") {
        computerScore++;
    } if (winorlose === null) {
            console.log("You didn't enter a valid value");
    } console.log("You: " + humanScore + ", Computer: " + computerScore);
    results.textContent += `You: ${humanScore}, Computer: ${computerScore}`;
    if (humanScore >= 5) {
        results.textContent += " YOU WON THE FIVE ROUND GAMBIT!";
        humanScore = 0;
        computerScore = 0;
    }
    if (computerScore >= 5) {
        results.textContent += " YOU LOSE THE FIVE ROUND GAMBIT!";
        humanScore = 0;
        computerScore = 0;
    }
};

const results= document.querySelector('.results');
const rpsContainer = document.querySelector('.rps-container');

rpsContainer.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.id) {
        case 'rock':
            playGame(1) ;
           break;
        case 'paper':
            playGame(2);
            break;
        case 'scissors':
            playGame(3);
            break;
    }
});



//console.log(getComputerChoice());
//console.log(getHumanChoice());