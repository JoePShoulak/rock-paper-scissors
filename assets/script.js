// Get the player's choice
function getPlayerChoice() {
    var choice = prompt("Choose R, P, or S");

    if (choice != "R" && choice != "P" && choice != "S") {
        alert("Please choose R, P, or S");
        return "";
    }

    return choice;
}

// Generate a random choice for the computer
function getComputerChoice() {
    var options = ["R", "P", "S"];
    var index = Math.floor(Math.random()*3);
    var choice = options[index];

    return choice;
}

// Determine if the player won, lost, or tied based on the choices
function evaluateWinner(playerChoice, computerChoice) {
    // Same choice, must be a tie
    if (playerChoice == computerChoice) { return "tied"; }

    // A win has to be one of these 3 cases
    var win1 = (playerChoice == "R" && computerChoice == "S");
    var win2 = (playerChoice == "S" && computerChoice == "P");
    var win3 = (playerChoice == "P" && computerChoice == "R");

    if (win1 || win2 || win3) { return "won"; }
    
    // If we've returned no other result, we must have lost
    return "lost";
}

var winsSpan = document.querySelector("#wins");
var lossesSpan = document.querySelector("#losses");

// Let the player know the result of the round, update their score, and inform the player thereof
function updateScore(result) {
    switch(result) {
        case "won":
            playerWins++;
            break;
        case "lost":
            playerLosses++;
            break;
    }

    winsSpan.innerHTML = playerWins;
    lossesSpan.innerHTML = playerLosses;

    alert(`You ${result}! You have ${playerWins} wins and ${playerLosses} losses.`)
}

// Start our scores at zero
var playerWins = 0;
var playerLosses = 0;

// Main function for playing the game
function playGame() {
    var playing = true;

    while (playing) { // Until we say stop in the confrim prompt at the end...
        var playerChoice = getPlayerChoice();

        // If the player gave a valid choice
        if (playerChoice != "") {
            var computerChoice = getComputerChoice();
            alert(`Computer chose ${computerChoice}`);
            
            var result = evaluateWinner(playerChoice, computerChoice);
            
            updateScore(result);
            
            playing = confirm("Still want to play the game?");
        }
    }
}

// Find and add listener for beginning the game loop at first or after choosing not to continue
var playButton = document.querySelector("#play");
playButton.addEventListener("click", playGame)
