let humanScore = 0;
let computerScore = 0;

//Returns Rock, Paper, or Scissors chosen randomly
function getComputerChoice() {
    randomNum = 0;
    //While loop removes 0 as an option leaving all three choices with equal odds 1-33, 34-66, and 67-99 respectively
    while (randomNum === 0) {
        randomNum = Math.floor(Math.random() * 100)
    }
    switch(true){
        case randomNum <= 33:
            return "Rock";
            break;
        case randomNum > 33 && randomNum <= 66:
            return "Paper";
            break;
        case randomNum > 66:
            return "Scissors";
            break;
        default:
            console.log("Error in selection!")
            break;
    }
}

//Determines the winner of round and displays updated scores
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock") {
        switch(true) {
            case computerChoice === "Rock":
                console.log("Tie! No points awarded.\n" + getScores());
                break;
            case computerChoice === "Paper":
                computerScore++;
                console.log("Computer wins round!\n" + getScores());
                break;
            case computerChoice === "Scissors":
                humanScore++;
                console.log("Human wins round!\n" + getScores());
                break;
            default:
                console.log("Something has gone terribly wrong!");
                break;

        }
    }else if (humanChoice === "Paper") {
        switch(true) {
            case computerChoice === "Rock":
                humanScore++;
                console.log("Human wins round!\n" + getScores());
                break;
            case computerChoice === "Paper":
                console.log("Tie! No points awarded.\n" + getScores());
                break;
            case computerChoice === "Scissors":
                computerScore++;
                console.log("Computer wins round!\n" + getScores());
                break;
            default:
                console.log("Something has gone terribly wrong!");
                break;

        }
    }else if (humanChoice === "Scissors") {
        switch(true) {
            case computerChoice === "Rock":
                computerScore++;
                console.log("Computer wins round!\n" + getScores());
                break;
            case computerChoice === "Paper":
                humanScore++;
                console.log("Human wins round!\n" + getScores());
                break;
            case computerChoice === "Scissors":
                console.log("Tie! No points awarded.\nComputer Score: " + computerScore + "\nHuman Score: " +  humanScore);
                break; 
            default:
                console.log("Something has gone terribly wrong!");
                break;

        }
    }else {
        console.log("Error in human selection. Please type Rock, Paper, or Scissors.")
    }
}

//Returns string with current scores
function getScores() {
    return "Computer Score: " + computerScore + "\nHuman Score: " + humanScore;
}
