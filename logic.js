var no = Math.floor(3* Math.random());
var choices = ["rock", "paper","scissor"]
var result = "";
var playerScore = 0;
var computerScore= 0;
console.log(choices[no]);
function finduser(playerChoice)
{
    var computerChoice = choices[no]
    console.log("Player chosen" + " " + playerChoice);
    console.log("Computer chosen" + " " + computerChoice );
    
    
    switch (computerChoice)
    {
        case "rock":
            if (playerChoice=="rock")
                {
                    result = "It is Tie" ;
                    playerScore = playerScore + 1;
                    computerScore = computerScore + 1;
                }
            if (playerChoice=="paper")
                {
                    result = "Player Wins!";
                    playerScore = playerScore + 1;
                 }
            if (playerChoice=="scissor")
                {
                    result = "Computer Wins!";
                    computerScore = computerScore + 1;
                }           
            break;
        case "paper":
            if (playerChoice=="rock")
                {
                    result = "Computer Wins!";
                    computerScore = computerScore + 1;
                }
            if (playerChoice=="paper")
                {
                    result = "It is a Tie!";
                    playerScore = playerScore + 1;
                    computerScore = computerScore + 1;
                 }
            if (playerChoice=="scissor")
                {
                    result = "Player Wins!";
                    playerScore = playerScore + 1;
                }     
            break;
        case "scissor":
            if (playerChoice=="rock")
                {
                    result = "Player Wins!";
                    playerScore = playerScore + 1;
                }
            if (playerChoice=="paper")
                {
                    result = "Computer Wins!";
                    computerScore = computerScore + 1;
                 }
            if (playerChoice=="scissor")
                {
                    result = "It is a Tie!";             
                    playerScore = playerScore + 1;
                    computerScore = computerScore + 1;
                }     
            break;
    }
    
}
finduser("rock");
console.log(result);
console.log(playerScore);
console.log(computerScore);