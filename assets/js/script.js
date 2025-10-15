const pouvoirs = ["feu", "eau", "terre"];


const regles = {
  feu: "terre",  
  eau: "feu",    
  terre: "eau"   
};

function powerPc() {
  const index = Math.floor(Math.random() * pouvoirs.length);
  return pouvoirs[index];
}

function playGame(playerChoice, pcChoice) {
  if (playerChoice === pcChoice) {
    return "Égalité !";
  } else if (regles[playerChoice] === pcChoice) {
    return `Gagné ! ${capitalize(playerChoice)} bat ${pcChoice}.`;
  } else {
    return `Perdu ! ${capitalize(pcChoice)} bat ${playerChoice}.`;
  }
}


function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { powerPc, playGame };
