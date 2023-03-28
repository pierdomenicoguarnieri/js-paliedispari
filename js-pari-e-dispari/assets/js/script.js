let choice;

let n;

do{
  choice =  prompt("Cosa scegli? Pari o Dispari?").toLowerCase();
}while(choice !== "pari" && choice !== "dispari")

do {
  n = parseInt(prompt("Inserisci un numero tra 1 e 5"));
} while (n <= 1 && n>= 5);
