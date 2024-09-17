let humanScore = 0;
let computerScore = 0;
let round = 1;

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
            scoreCont.innerText = "Error in selection!"
            break;
    }
}

//Determines the winner of round and displays updated scores
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock") {
        switch(true) {
            case computerChoice === "Rock":
                scoreCont.innerText = "Tie! No points awarded for round " + round + ".\n" + getScores();
                break;
            case computerChoice === "Paper":
                computerScore++;
                scoreCont.innerText = "Computer wins round " + round + "!\n" + getScores();
                break;
            case computerChoice === "Scissors":
                humanScore++;
                scoreCont.innerText = "Human wins round " + round + "!\n" + getScores();
                break;
            default:
                scoreCont.innerText = "Something has gone terribly wrong!";
                break;

        }
    }else if (humanChoice === "Paper") {
        switch(true) {
            case computerChoice === "Rock":
                humanScore++;
                scoreCont.innerText = "Human wins round " + round + "!\n" + getScores();
                break;
            case computerChoice === "Paper":
                scoreCont.innerText = "Tie! No points awarded for round " + round + ".\n" + getScores();
                break;
            case computerChoice === "Scissors":
                computerScore++;
                scoreCont.innerText = "Computer wins round " + round + "!\n" + getScores();
                break;
            default:
                scoreCont.innerText = "Something has gone terribly wrong!";
                break;

        }
    }else if (humanChoice === "Scissors") {
        switch(true) {
            case computerChoice === "Rock":
                computerScore++;
                scoreCont.innerText = "Computer wins round " + round + "!\n" + getScores();
                break;
            case computerChoice === "Paper":
                humanScore++;
                scoreCont.innerText = "Human wins round " + round + "!\n" + getScores();
                break;
            case computerChoice === "Scissors":
                scoreCont.innerText = "Tie! No points awarded for round " + round + ".\nComputer Score: " + computerScore + "\nHuman Score: " +  humanScore;
                break; 
            default:
                scoreCont.innerText = "Something has gone terribly wrong!";
                break;

        }
    }else {
        scoreCont.innerText = "Error in human selection. Please type Rock, Paper, or Scissors.";
    }
    round++;

    if(humanScore >= 5){
        scoreCont.innerText = "HUMAN WINS!\nGame resetting..."
        setTimeout(reset, 3000);
    }else if(computerScore >= 5){
        scoreCont.innerText = "COMPUTER WINS!\nGame resetting..."
        setTimeout(reset, 3000);
    }
}

//Returns string with current scores
function getScores() {
    return "Computer Score: " + computerScore + "\nHuman Score: " + humanScore;
}

function reset(){
    humanScore = 0;
    computerScore = 0;
    round = 1;
    scoreCont.innerText = getScores();
}

const btn = document.querySelectorAll('button');
btn.forEach(x => x.addEventListener('click', (e) => playRound(e.target.textContent, getComputerChoice())));

const scoreCont = document.querySelector('.scores');
scoreCont.innerText = getScores();
