//Returns Rock, Paper, or Scissors chosen randomly
function getComputerChoice() {
    randomNum = 0;
    //While loop removes 0 as an option leaving all three choices with equal odds 1-33, 34-66, and 67-99 respectively
    while (randomNum === 0) {
        randomNum = Math.floor(Math.random() * 100);
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