const word = prompt("Inserisci una parola").toLowerCase().trim();

const output = document.getElementById("output");

result = wordCheck(word);

output.innerHTML = result ? "Hai inserito la parola " + word + " ed è palindroma" : "Hai inserito la parola " + word + " e non è palindroma.";

function wordCheck(word){
  //Acquisisco il punto centrale della parola per poterlo saltare nel controllo della parola palindroma con lunghezza dispari
  let wordMiddlePoint;

  let flag = true;

  if(word.length % 2) wordMiddlePoint = Math.floor((word.length)/2);

  for(let i = 0; i < word.length; i++){
    if(i === wordMiddlePoint){
      continue;
    }else if(word[i] !== word[(word.length - 1) - i]){
      flag = false;
    }
  }

  return flag;
}