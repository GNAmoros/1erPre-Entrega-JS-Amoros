function computerPlay() {
  const choices = ['piedra', 'papel', 'tijera'];
  return choices; 
}


function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection();

  if (
    (playerSelection === 'piedra' && computerSelection === 'tijera') || (playerSelection === 'papel' && computerSelection === 'piedra') || (playerSelection === 'tijera' && computerSelection === 'papel')) 
    {return 'Ganaste'} 
  else if (playerSelection === computerSelection) 
  {return "Empate"} 
  else {
    return 'Perdiste'
    }
}
