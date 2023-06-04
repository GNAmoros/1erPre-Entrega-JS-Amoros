function computerPlay() {
  const choices = ['piedra', 'papel', 'tijera'];
  const randomIndex = Math.floor(Math.random() * choices.lenght);
  return choices [randomIndex]; 
}


function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (
    (playerSelection === 'piedra' && computerSelection === 'tijera') || (playerSelection === 'papel' && computerSelection === 'piedra') || (playerSelection === 'tijera' && computerSelection === 'papel')) 
    {return 'Ganaste'} 
  else if (playerSelection === computerSelection) 
  {return "Empate"} 
  else {
    return 'Perdiste'
    }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let rounds = 3;

  for (let i = 0; i < rounds; i++) {
    const playerSelection = prompt('Elige: piedra, papel o tijera');
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes('Ganaste')) {
      playerScore++;
    } else if (result.includes('Perdiste')) {
      computerScore++;
    }
  }

  console.log('Puntaje Final:');
  console.log('Jugador: ' + playerScore);
  console.log('Computer: ' + computerScore);
}



game();