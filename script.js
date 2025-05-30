// Step 1: sanity check
console.log("Hello World");

// Step 2: computer choice
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 1/3) return "rock";
  if (rand < 2/3) return "paper";
  return "scissors";
}

// Step 3: human choice
function getHumanChoice() {
  const choice = prompt("Enter rock, paper or scissors:");
  return choice;
}

// Step 6: play the full 5-round game
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Step 5: single-round logic (now inside playGame so it sees the scores)
  function playRound(humanChoice, computerChoice) {
    const h = humanChoice.toLowerCase();
    const c = computerChoice;

    if (h === c) {
      console.log(`It's a tie! You both chose ${h}.`);
      return;
    }

    const win =
      (h === "rock"     && c === "scissors") ||
      (h === "paper"    && c === "rock")     ||
      (h === "scissors" && c === "paper");

    if (win) {
      humanScore++;
      console.log(`You win! ${h.charAt(0).toUpperCase() + h.slice(1)} beats ${c}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${c.charAt(0).toUpperCase() + c.slice(1)} beats ${h}.`);
    }
  }

  // play 5 rounds
  for (let i = 1; i <= 5; i++) {
    const humanSelection   = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score → You: ${humanScore}, Computer: ${computerScore}\n`);
  }

  // final result
  if (humanScore > computerScore) {
    console.log(`🎉 You won the game ${humanScore} to ${computerScore}!`);
  } else if (computerScore > humanScore) {
    console.log(`😞 You lost the game ${computerScore} to ${humanScore}.`);
  } else {
    console.log(`🤝 The game is a tie at ${humanScore} each.`);
  }
}

playGame();
