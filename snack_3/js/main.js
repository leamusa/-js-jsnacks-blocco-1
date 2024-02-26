// Dichiarazione di una funzione di primo livello (non usata nel codice successivo)
function luckyNumber() {
  return 7; // Esempio di numero fortunato
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array per memorizzare i numeri inseriti

// Utilizzo di un ciclo for
for (let i = 0; i < 10; i++) {
  const numero = luckyNumber();
  console.log(numero);
}

// Calcolo della somma utilizzando il ciclo for
let sum_for = 0;
for (let i = 0; i < numbers.length; i++) {
  sum_for += numbers[i];
}

console.log(`La somma utilizzando il ciclo for è: ${sum_for}`);

// Utilizzo di un ciclo while
let sum_while = 0;
let j = 0;

while (j < numbers.length) {
  sum_while += numbers[j];
  j++;
}

console.log(`La somma utilizzando il ciclo while è: ${sum_while}`);
