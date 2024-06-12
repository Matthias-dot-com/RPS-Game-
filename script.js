const choice = ["rock", "paper", "scissor"];

const div = document.createElement("div");
div.classList.add("btn-container");

const div2 = document.createElement("div");
div2.classList.add("score-container");

const div3 = document.createElement("div");
div3.classList.add("se-container");

const scoreArea = document.createElement("p");
const Status = document.createElement("p");

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorBtn = document.createElement("button");
const startBtn = document.createElement("button");
const endBtn = document.createElement("button");

rockBtn.textContent = "Rock";
div.appendChild(rockBtn);

paperBtn.textContent = "Paper";
div.appendChild(paperBtn);

scissorBtn.textContent = "Scissor";
div.appendChild(scissorBtn);

startBtn.textContent = "Start";
div3.appendChild(startBtn);

endBtn.textContent = "End";
div3.appendChild(endBtn);

let humanScore = 0;
let computerScore = 0;

scoreArea.textContent = `User ${humanScore} : Computer ${computerScore}`;
div2.appendChild(scoreArea);
div2.appendChild(Status);
document.body.append(div2);
document.body.append(div);
document.body.append(div3);
document.body.style.height = "80vh";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";

div.style.margin = "20px";

div2.style.margin = "20px";

startBtn.style.margin = "20px";
startBtn.style.margin = "20px";

function computerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoice = choice[randomNumber];
  return computerChoice;
}
rockBtn.addEventListener("click", function () {
  eventHandle("rock", computerChoice());
});
paperBtn.addEventListener("click", function () {
  eventHandle("paper", computerChoice());
});
scissorBtn.addEventListener("click", function () {
  eventHandle("scissor", computerChoice());
});
startBtn.addEventListener("click", resetGame);
endBtn.addEventListener("click", endGame);

function eventHandle(humanChoice, computerChoice) {
  if (humanScore < 5 || computerScore < 5) {
    if (humanChoice === computerChoice) {
      Status.innerHTML = `It's a tie! <br><br>  Human chose ${humanChoice} <br><br> Computer chose ${computerChoice} `;
      scoreArea.textContent = `Score You: ${humanScore}, Computer: ${computerScore}`;
    } else if (
      (humanChoice === choice[0] && computerChoice === choice[2]) ||
      (humanChoice === choice[1] && computerChoice === choice[0]) ||
      (humanChoice === choice[2] && computerChoice === choice[1])
    ) {
      humanScore++;
      Status.innerHTML = `You Scored! <br><br>  Human chose ${humanChoice} <br><br> Computer chose ${computerChoice} `;
      scoreArea.textContent = `Score You: ${humanScore}, Computer: ${computerScore}`;
    } else {
      computerScore++;
      Status.innerHTML = `You Lost! <br><br>  Human chose ${humanChoice} <br><br> Computer chose ${computerChoice} `;
      scoreArea.textContent = `Score You: ${humanScore}, Computer: ${computerScore}`;
    }
  }

  if (humanScore == 5 || computerScore == 5) {
    disableButton();
  }
}

function disableButton() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorBtn.disabled = true;
}

function enableButtons() {
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorBtn.disabled = false;
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  scoreArea.textContent = `User ${humanScore} : Computer ${computerScore}`;
  Status.innerHTML = "";
  enableButtons();
}

function endGame() {
  disableButton();
  Status.innerHTML = "Game Ended. Click Start to play again.";
}

resetGame();