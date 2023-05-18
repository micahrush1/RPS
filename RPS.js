function playRound(playerSelection, computerSelection) {
    if (playerSelection=="rock" && computerSelection=="rock") {
      return "Tie! Rock is equivalent to Rock!";    
  } else if (playerSelection=="rock" && computerSelection=="Scissors") {
       return  "Rock beats Scissors! Player win!";
   } else if (playerSelection=="rock" && computerSelection=="Paper"){
       return "Paper beats Rock! Computer win!";
  } 
}
 function getRndInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;
 }
  function getComputerChoice(a=getRndInteger(1,3)) {
   if (a==1) {
       return "Scissors";
   } else if (a==2) {
       return "rock";
   } else if (a==3) {
       return "Paper";
   }
   
  }
 const playerSelection = "rock";
 const computerSelection = getComputerChoice();
 
 function game () {
   console.log(playRound(playerSelection,computerSelection));   
}

 game()