// -1 Crea un array vuoto
let numbersOdd = [];

// -2 Chiedi per 6 volte all'utente di inserire un numero
for (let i = 0; i < 6; i++) {
  // -3 se è dispari inseriscilo nell’array
  let userNumber = parseInt(prompt("Inserisci un numero:"));

  // Verifica se il numero è dispari
  while (userNumber % 2 === 0) {
    // Se è pari, richiedi il numero
    userNumber = parseInt(prompt("Inserisci un numero dispari:"));
  }

  // Inserisci il numero dispari nell'array
  numbersOdd.push(userNumber);
}

// Stampa l'array con i numeri dispari
console.log("Numeri dispari inseriti:", numbersOdd);
