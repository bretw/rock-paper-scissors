
function getComputerChoice() {  //get a random int between 1 and 3
    let x = Math.random();
    
    if (x <= (1/3)) {
        return 1;
        } else if (x <= (2/3)) {
        return 2;
        } else {return 3;}
    };

function getHumanChoice() {   //assign rock paper scissors to 1,2,3 and get human prompt
    let userinput = prompt("Rock, Paper, or Scissors [R, P, or S]?");
    if (userinput.toLowerCase() === "rock") {
        return 1;
    } else  if (userinput.toLowerCase() === "paper") {
        return 2;
    } else if  (userinput.toLowerCase() === "scissors") {
        return 3;
        }
       else return null;
    };

    
function playRound() {  //play a round   "It's a tie!"  "You lost!"   "You won!"
    let x = getHumanChoice();
    if (x === null) {
        return null;
    }
    let y = getComputerChoice();
    if (x===1) {
        console.log("You: Rock");
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
   let iterations = prompt("How many games do you want to play?");
   for (let i=0; i < iterations; i++) {
    let winorlose = playRound();
        if (winorlose === "win") {
        humanScore++;
    } if (winorlose === "loss") {
        computerScore++;
    } if (winorlose === null) {
            console.log("You didn't enter a valid value");
    } console.log("You: " + humanScore + ", Computer: " + computerScore);
}
   

};

playGame();


//console.log(getComputerChoice());
//console.log(getHumanChoice());