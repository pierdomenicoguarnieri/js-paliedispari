const word = prompt("Inserisci una parola");

result = wordCheck(word);

function wordCheck(word){
  //Acquisisco il punto centrale della parola per poterlo saltare nel controllo della parola palindroma con lunghezza dispari
  let wordMiddlePoint;
  if(word.length % 2){
    wordMiddlePoint = Math.floor((word.length)/2);
  }
}

