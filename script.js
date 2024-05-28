const choice = ["rock", "paper", "scissor"];

function getNumberOfGames() {
  let numberOfGames = prompt("Enter the number of games: ");
  return numberOfGames;
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoice = choice[randomNumber];
  return computerChoice;
}
function getHumanChoice() {
  console.log("Your choices are: ");
  for (let i = 0; i <= 2; i++) {
    console.log(choice[i]);
  }
  const humanChoice = prompt("Enter your choice: ").toLowerCase();
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (!choice.includes(humanChoice)) {
    return "Invalid choice!";
  } else if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    humanScore++;
    return "You win!";
  } else {
    computerScore++;
    return "You lose!";
  }
}
console.log("Welcome to the game!");
console.log(humanScore, computerScore);
const numberOfGames = getNumberOfGames();
for (let i = 0; i < numberOfGames; i++) {
  var humanSelection = getHumanChoice();
  var computerSelection = getComputerChoice();

  console.log(playRound(humanSelection, computerSelection));

  console.log(`You chose ${humanSelection}`);
  console.log(`Computer chose ${computerSelection}`);
  console.log(`Score You: ${humanScore}, Computer: ${computerScore}`);
}
