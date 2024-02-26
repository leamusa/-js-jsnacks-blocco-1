//-1 Chiedi un numero di 4 cifre all’utente

// Chiedi un numero di 4 cifre all'utente
console.log("ok");
let sum = 0;
let userNumber = prompt("inserisci un numero di 4 cifre: ");
for (let i = 0; i < userNumber.length; i++) {
  let element = userNumbe[i];
  element = Number(element);
  sum += element;
  console.log(sum);
}

userNumber = Number(userNumber);
console.log(userNumber);
