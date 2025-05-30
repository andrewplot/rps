const humanScoreEl    = document.getElementById('human-score');
const computerScoreEl = document.getElementById('computer-score');
const roundNumEl      = document.getElementById('round-num');
const resultEl        = document.getElementById('result');
const buttons         = document.querySelectorAll('.choice-btn');
const restartBtn      = document.getElementById('restart');

let humanScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  round++;
  roundNumEl.textContent = round;

  if (humanChoice === computerChoice) {
    resultEl.textContent = `Tie! You both chose ${humanChoice}.`;
  } else {
    const wins = {
      rock: ['scissors'],
      paper: ['rock'],
      scissors: ['paper']
    };

    const win = wins[humanChoice].includes(computerChoice);

    if (win) {
      humanScore++;
      humanScoreEl.textContent = humanScore;
      resultEl.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
      computerScore++;
      computerScoreEl.textContent = computerScore;
      resultEl.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
  }

  if (round === 5) endGame();
}

function endGame() {
  buttons.forEach(b => b.disabled = true);
  if (humanScore > computerScore) {
    resultEl.textContent = `🎉 You won ${humanScore} to ${computerScore}!`;
  } else if (computerScore > humanScore) {
    resultEl.textContent = `😞 You lost ${computerScore} to ${humanScore}.`;
  } else {
    resultEl.textContent = `🤝 It's a tie at ${humanScore} each.`;
  }
  restartBtn.hidden = false;
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const choice = btn.dataset.choice;
    playRound(choice);
  });
});

restartBtn.addEventListener('click', () => {
  humanScore = 0;
  computerScore = 0;
  round = 0;
  humanScoreEl.textContent = '0';
  computerScoreEl.textContent = '0';
  roundNumEl.textContent = '0';
  resultEl.textContent = 'Make your move!';
  buttons.forEach(b => b.disabled = false);
  restartBtn.hidden = true;
});
