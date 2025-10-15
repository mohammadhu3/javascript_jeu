import { powerPc, playGame } from "./script.js";
const buttons = document.querySelectorAll("button[data-power]");
const playerChoiceTxt = document.querySelector("#playerChoice");
const pcChoiceTxt = document.querySelector("#pcChoice");
const messageTxt = document.querySelector("#message");
const playerScoreTxt = document.querySelector("#playerScore");
const pcScoreTxt = document.querySelector("#pcScore");
const resetBtn = document.querySelector("#reset");

let playerScore = 0;
let pcScore = 0;
const LIMIT = 10;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.power;
        const pcChoice = powerPc();
        const resultat = playGame(playerChoice, pcChoice);

     
        playerChoiceTxt.textContent = playerChoice;
        pcChoiceTxt.textContent = pcChoice;
        messageTxt.textContent = resultat;

        
        if (resultat.startsWith("Gagné")) playerScore++;
        else if (resultat.startsWith("Perdu")) pcScore++;

        playerScoreTxt.textContent = playerScore;
        pcScoreTxt.textContent = pcScore;

        if (playerScore === LIMIT || pcScore === LIMIT) {
            finDePartie();
        }
    });
});


resetBtn.addEventListener("click", resetGame);


function finDePartie() {
    buttons.forEach(b => b.disabled = true);
    resetBtn.hidden = false;

    if (playerScore > pcScore) {
        messageTxt.textContent = "🎉 Partie terminée, tu as gagné !";
    } else {
        messageTxt.textContent = "🤖 L'ordinateur a gagné la partie.";
    }
}

function resetGame() {
    playerScore = 0;
    pcScore = 0;
    playerScoreTxt.textContent = "0";
    pcScoreTxt.textContent = "0";
    playerChoiceTxt.textContent = "—";
    pcChoiceTxt.textContent = "—";
    messageTxt.textContent = "Clique sur un bouton pour jouer !";

    buttons.forEach(b => b.disabled = false);
    resetBtn.hidden = true;
}

buttons.forEach(button => {
    button.addEventListener("dblclick", () => {
        console.log("Double clic détecté sur :", button.dataset.power);
    });
});
