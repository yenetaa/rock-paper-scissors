const buttons = document.querySelectorAll('.js-btn');
const scoreText = document.querySelector('.js-score');
const resultText = document.querySelector('.js-result');
const winnerText = document.querySelector('.js-winner');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * 3)]
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultText.textContent = `It's a tie! You both picked ${humanChoice}.`
    return 'tie'
  } else if (
    humanChoice === 'rock' && computerChoice === 'scissors' ||
    humanChoice === 'paper' && computerChoice === 'rock' ||
    humanChoice === 'scissors' && computerChoice === 'paper'
  ) {
    resultText.textContent = `You win. ${humanChoice} beats ${computerChoice}`
    return 'win'
  } else {
    resultText.textContent = `You lose. ${computerChoice} beats ${humanChoice}`
    return 'lose'
  }
}

function endGame() {
  if (humanScore === 5 && computerScore === 5) {
    winnerText.textContent = 'Game Over! You drew the round!';
  } else if (computerScore === 5) {
    winnerText.textContent = 'Game Over! You lost the round!';
  } else {
    winnerText.textContent = 'Game Over! You won the round!';
  }

  humanScore = 0;
  computerScore = 0;
}

function playGame() {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      winnerText.textContent = '';
      const result = playRound(button.id, getComputerChoice());

      if (result === 'tie') {
        humanScore++;
        computerScore++;
      } else if (result === 'win') {
        humanScore++;
      } else {
        computerScore++;
      }

      scoreText.textContent = `You ${humanScore} - ${computerScore} Computer`;

      if (humanScore === 5 || computerScore ===5) {
        endGame();
      }
    })
  })
}

playGame()
