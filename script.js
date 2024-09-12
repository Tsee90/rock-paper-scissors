
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;

    //Plays five round and determines the outcome
    while (round < 6){
        playRound(getHumanChoice(), getComputerChoice());
        round++;
    }
    if (humanScore > computerScore){
        console.log("GAME OVER, YOU WIN!\n" + getScores());
    }else if (humanScore < computerScore) {
        console.log("GAME OVER, YOU LOSE!\n" + getScores());
    }else if (humanScore === computerScore) {
        console.log("GAME OVER, TIE!\n" + getScores());
    }else {
        console.log("Something is not right here...");
    }

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

    //User inputs Rock, Paper, or Scissors
    function getHumanChoice(){
        input = prompt("Round " + round + " of 5: Rock, Paper, or Scissors?");
        input = input[0].toUpperCase() + input.slice(1);
        
        while (input !== "Rock" && input !== "Paper" && input !== "Scissors") {
            input = prompt("You Imbecile! Type: Rock, Paper, or Scissors.")
            input = input[0].toUpperCase() + input.slice(1);    
            if (input === "Rock" || input === "Paper" || input === "Scissors"){
                    break;
            }        
        }
            
        
        return input;
    }

    //Determines the winner of round and displays updated scores
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "Rock") {
            switch(true) {
                case computerChoice === "Rock":
                    console.log("Tie! No points awarded for round " + round + ".\n" + getScores());
                    break;
                case computerChoice === "Paper":
                    computerScore++;
                    console.log("Computer wins round " + round + "!\n" + getScores());
                    break;
                case computerChoice === "Scissors":
                    humanScore++;
                    console.log("Human wins round " + round + "!\n" + getScores());
                    break;
                default:
                    console.log("Something has gone terribly wrong!");
                    break;

            }
        }else if (humanChoice === "Paper") {
            switch(true) {
                case computerChoice === "Rock":
                    humanScore++;
                    console.log("Human wins round " + round + "!\n" + getScores());
                    break;
                case computerChoice === "Paper":
                    console.log("Tie! No points awarded for round " + round + ".\n" + getScores());
                    break;
                case computerChoice === "Scissors":
                    computerScore++;
                    console.log("Computer wins round " + round + "!\n" + getScores());
                    break;
                default:
                    console.log("Something has gone terribly wrong!");
                    break;

            }
        }else if (humanChoice === "Scissors") {
            switch(true) {
                case computerChoice === "Rock":
                    computerScore++;
                    console.log("Computer wins round " + round + "!\n" + getScores());
                    break;
                case computerChoice === "Paper":
                    humanScore++;
                    console.log("Human wins round " + round + "!\n" + getScores());
                    break;
                case computerChoice === "Scissors":
                    console.log("Tie! No points awarded for round " + round + ".\nComputer Score: " + computerScore + "\nHuman Score: " +  humanScore);
                    break; 
                default:
                    console.log("Something has gone terribly wrong!");
                    break;

            }
        }else {
            console.log("Error in human selection. Please type Rock, Paper, or Scissors.");
        }
    }

    //Returns string with current scores
    function getScores() {
        return "Computer Score: " + computerScore + "\nHuman Score: " + humanScore;
    }

}