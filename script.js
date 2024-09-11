//Returns Rock, Paper, or Scissors chosen randomly
function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 100); 
    console.log(randomNum);
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