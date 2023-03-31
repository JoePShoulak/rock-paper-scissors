var playButton = document.getElementById("play");
var lossesSpan = document.getElementById("losses");
var winsSpan = document.getElementById("wins");

var losses = 0;
var wins = 0;
var options = ["R", "P", "S"];

function getPlayerChoice() {
  var choice = prompt("Choose R, P, or S");

  if (!options.includes(choice)) {
    alert("Please choose R, P, or S");
    return null;
  }

  return choice;
}

function getComputerChoice() {
  var index = Math.floor(Math.random() * 3);
  var choice = options[index];

  return choice;
}

function evaluateWinner(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) return "tied";

  var win1 = playerChoice == "R" && computerChoice == "S";
  var win2 = playerChoice == "S" && computerChoice == "P";
  var win3 = playerChoice == "P" && computerChoice == "R";

  return win1 || win2 || win3 ? "won" : "lost";
}

function updateScore(result) {
  if (result === "won") wins++;
  if (result === "lost") losses++;

  winsSpan.innerHTML = wins;
  lossesSpan.innerHTML = losses;

  alert(`You ${result}! You have ${wins} wins and ${losses} losses.`);
}

function playGame() {
  var playing = true;

  while (playing) {
    var playerChoice = getPlayerChoice();

    if (playerChoice) {
      var computerChoice = getComputerChoice();
      alert(`Computer chose ${computerChoice}`);

      var result = evaluateWinner(playerChoice, computerChoice);

      updateScore(result);

      playing = confirm("Still want to play the game?");
    }
  }
}

playButton.addEventListener("click", playGame);
