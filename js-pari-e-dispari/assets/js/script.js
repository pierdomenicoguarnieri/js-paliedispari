let choice;

let n;

do{
  choice =  prompt("Cosa scegli? Pari o Dispari?").toLowerCase();
}while(choice !== "pari" && choice !== "dispari")

do {
  n = parseInt(prompt("Inserisci un numero tra 1 e 5"));
} while (n <= 1 && n>= 5);

const nComputer = randomNumber();

const message = calculateWinner(choice, n, nComputer);

function randomNumber(){
  let n = Math.floor(Math.random() * 5) + 1;
  return n;
}

function calculateWinner(scelta, nUtente, nComputer){
  let message

  const sum = nUtente + nComputer;

  let flag = (sum % 2) ? false : true;

  switch (scelta){
    case "pari":
      message = flag ? "Hai vinto!" : "Hai perso.";
      break;

    case "dispari":
      message = flag ? "Hai perso." : "Hai vinto!";
      break;

    default:
      message = "Errore!"
  }

  return message;
}
