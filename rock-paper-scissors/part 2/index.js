const ROUNDS = 5;

let currentRound = 0;
let currentPlayerScore = 0;
let currentComputerScore = 0;

const setGame = (round, playerScore, computerScore) => {
  const roundCount = document.querySelector(".round-count");
  roundCount.textContent = `Round: ${round}`;

  const playerScoreCount = document.querySelector(".player-score");
  playerScoreCount.textContent = `Player Score: ${playerScore}`;

  const computerScoreCount = document.querySelector(".computer-score");
  computerScoreCount.textContent = `Computer Score: ${computerScore}`;
};


const finalResult = (playScore,computerScore) => {
    const final = document.querySelector('.final-result');
    if (playScore === computerScore) {
        final.textContent= "DRAW NO WINNER";
    } else if (playScore > computerScore) {
        final.textContent= "PLAYER WINS!";
    } else {
        final.textContent="COMPUTER WINS";
    }
    currentRound = 0;
    currentPlayerScore =0;
    currentComputerScore =0;
    setGame(0,0,0);
}

const playerSelection = (playerMove) => {
  //console.log(playerMove)
  if (currentRound === ROUNDS) {
    finalResult(currentPlayerScore, currentComputerScore);
  } else {
    currentRound += 1;

    const play = document.querySelector(".player-play");

    let cp = computerPlay();
    play.textContent = ` ${playerMove} vs  ${cp}`;
    const roundResult = playRound(playerMove, cp);
    const resultOfRound = document.querySelector(".round-result");

    if (roundResult === 0) {
      resultOfRound.textContent = "Draw";
    } else if (roundResult > 0) {
      resultOfRound.textContent = "Player Wins";
      currentPlayerScore += 1;
    } else {
      resultOfRound.textContent = "Computer Wins";
      currentComputerScore += 1;
    }
    setGame(currentRound, currentPlayerScore, currentComputerScore);
    if (currentRound === ROUNDS) {
        finalResult(currentPlayerScore, currentComputerScore);
      }
  }
};

const computerPlay = () => {
  let play = Math.floor(Math.random() * 3);
  switch (play) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
};

const playRound = (playerSelection, computerSelection) => {
  let player = playerSelection;

  if (player === computerSelection) {
    result = 0;
  } else if (player === "rock") {
    if (computerSelection === "scissors") {
      result = 1;
    } else {
      result = -1;
    }
  } else if (player === "paper") {
    if (computerSelection === "rock") {
      result = 1;
    } else {
      result = -1;
    }
  } else {
    if (computerSelection === "paper") {
      result = 1;
    } else {
      result = -1;
    }
  }

  return result;
};
