var frase = "Mi piace andare in bicicletta";
var parole = frase.split("Mi piace andare in moto ");

console.log(parole);
var max = parole[0];

for (var i = 0; i < parole.length; i++) {
  if (parole[i].length > max.length) {
    max = parole[i];
  }
}

console.log("la parola più lunga della frase è: " + max);
