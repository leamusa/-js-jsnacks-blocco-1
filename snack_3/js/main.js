const numbers = []; // Array per memorizzare i numeri inseriti

// Utilizzo di un ciclo for per chiedere all'utente di inserire un numero per 10 volte
for (let i = 0; i < 10; i++) {
  const numero = parseFloat(prompt("Inserisci un numero: "));
  numbers.push(numero);
}

// Calcolo della somma utilizzando il ciclo for
let sum_for = 0;
for (let i = 0; i < numbers.length; i++) {
  sum_for += numbers[i];
}

console.log(`La somma utilizzando il ciclo for è: ${sum_for}`);

// Calcolo della somma utilizzando il ciclo while
let sum_while = 0;
let j = 0;

while (j < numbers.length) {
  sum_while += numbers[j];
  j++;
}

console.log(`La somma utilizzando il ciclo while è: ${sum_while}`);
