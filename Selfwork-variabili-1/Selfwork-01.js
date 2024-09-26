let num1 = 5;
let num2 = 7;
console.log('il valore della variabile num1 è: ' + num1);
console.log(`il valore della variabile num2 è: ${num2} `);

let stringa = 'ciao,a tutti!';

stringa = 'benvenuti';
console.log(`il valore della variabile stringa è ${stringa}`);

const PIGRECO = 3.14159265359;
console.log(`il valore di Pgreco è ${PIGRECO}`);


// PIGRECO = 20;
console.log(PIGRECO);



// esercizio operatori-1

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let somma = a + b + c + d + e;
console.log (somma);

let media = somma / 5;

console.log(media / 5);


console.log('la somma tra i numeri equivale a ' + somma);

console.log('la media tra i numeri equivale a ' + media);

// SELFWORK OPERATORI-2

let years = 2024;
let età = Number(prompt("Inserisci il tuo anno di nascita :"));;
let conut_age = years - età;
  
console.log(conut_age);

let cent = 100;
let forcent = cent - conut_age;

console.log(`hai ${conut_age} anni e te ne mancano ${forcent} per arrivare a 100`);

// SELFWORK OPERATORI-3

let numero1 = Number(prompt("Inserisci il primo numero:"));
let numero2 = Number(prompt("Inserisci il secondo numero:"));

let addizione = (numero1 + numero2);

console.log(addizione);

let sottrazione = numero1 - numero2;

console.log(sottrazione);

let moltiplicazione = numero1 * numero2;

console.log(moltiplicazione);

let divisione = numero1 / numero2;

console.log(divisione);

let potenza = numero1 ** numero2;

console.log(potenza);

console.log(`con i numeri da te scelti, i risultati delle varie operazioni sono: addizione ${addizione}, sottrazione: ${sottrazione} moltiplicazione: ${moltiplicazione}, divisione: ${divisione}, elevazioneapotenza: 3434${potenza},`);

// SELFWORK OPERATORI-4

let cat = 44
let rows_cat= 6
let resto = cat % rows_cat
let numero_file = Math.floor(cat / rows_cat)
let cat_lost = rows_cat - resto

console.log (numero_file);
console.log(cat_lost);
console.log(resto);

console.log(`Ci sono ${numero_file} file di gatti e ne mancano ${cat_lost} per una nuova fila, con un avanzo di ${resto}.`);
