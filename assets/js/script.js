const word = prompt("Inserisci una parola");

result = wordCheck(word);

function wordCheck(word){
  //Acquisisco il punto centrale della parola per poterlo saltare nel controllo della parola palindroma con lunghezza dispari
  let wordMiddlePoint;

  let flag = true;

  if(word.length % 2){
    wordMiddlePoint = Math.floor((word.length)/2);
  }

  for(let i = 0; i < word.length; i++){
    if(i === wordMiddlePoint) continue;

    if(word[i] !== word[word.length - 1]) flag = false;
  }

  return flag;
}

