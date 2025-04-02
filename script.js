function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
  let choices = ['rock', 'paper', 'scissors']
  let choice = prompt("Enter Rock, Paper or Scissors").toLowerCase()
  while (!choices.includes(choice)) {
    choice = prompt('Enter a valid choice\nRock, Paper or Scissors').toLowerCase()
  }

  return choice
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both picked ${humanChoice}.`);
    return 'tie'
  } else if (
    humanChoice === 'rock' && computerChoice === 'scissors' ||
    humanChoice === 'paper' && computerChoice === 'rock' ||
    humanChoice === 'scissors' && computerChoice === 'paper'
  ) {
    console.log(`You win. ${humanChoice} beats ${computerChoice}`)
    return 'win'
  } else {
    console.log(`You lose. ${computerChoice} beats ${humanChoice}`)
    return 'lose'
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    const result = playRound(getHumanChoice(), getComputerChoice());
    if (result === 'tie') {
      humanScore++;
      computerScore++;
    } else if (result === 'win') {
      humanScore++;
    } else {
      computerScore++;
    }
  }

  if (humanScore === computerScore) {
    console.log(`The score is You(${humanScore}) - Computer(${computerScore}). TIE!`);
  } else if (humanScore > computerScore) {
    console.log(`The score is You(${humanScore}) - Computer(${computerScore}). WIN!`);
  } else {
    console.log(`The score is Computer(${computerScore}) - You(${humanScore}). LOSE!`);
  }
}

playGame()
