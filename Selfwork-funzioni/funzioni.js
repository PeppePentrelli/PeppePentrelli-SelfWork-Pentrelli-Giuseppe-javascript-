// SelfWork Funzioni 4

function esercizio(boolean) {


    let string = boolean.replace(/\W/g, "");

    let string_reverse = string.split('').reverse().join('');

    return string_reverse === string

}


let finale = esercizio('i topi non avevano nipoti')
console.log(finale);




// SelfWork Funzioni 3


// let User_choice = prompt('inserisci un numero da 1 a 9999');

// function check(numero_positivo) {


//     if (User_choice <= 9) {
//         console.log('il numero e formato da una cifra');

//     } else if (User_choice > 9 && User_choice <=99 ) {
//         console.log('il numero e formato da due cifre');

//     } else if (User_choice > 99 && User_choice <= 999) {
//         console.log('il numero è formato da tre cifre');

//     } else if (User_choice > 999 && User_choice <= 9999) {
//         console.log('il numero è formato da 4 cifre');

//     } else { console.log('il numero è troppo grande'); }

// }


// check(User_choice);





// selfwork Funzioni 2


// function stampa (num) {

//     for (i = 1; i <= num; i++) {

//         if (i % 15 == 0) {

//            console.log('FizzBuzz');


//         } else if (i % 5 == 0) {

//              console.log('Buzz');

//         } else if(i % 3 == 0) { 

//             console.log('fizz');

//         } else { 
//             console.log(i);

//         }

//     } 

// }
// stampa(100)


// Selfwork funzioni 1



// let scelta_utente = Number(prompt('Quanti tiri effettuerai a questo turno?'));

// function lancio_dado (numero_lanci) {
// let somma = 0
// let somma2 = 0


// for (let i = 0; i < numero_lanci; i++) {

//     somma +=  Math.floor(Math.random() * (6 - 1) + 1) +1;
//     somma2 +=  Math.floor(Math.random() * (6 - 1) + 1) +1;

// }
// console.log(somma);
// console.log(somma2);
// if (somma > somma2) {

//     return 'ha vinto il giocatore 1'


// } else if(somma2 > somma ) {

//     return 'ha vinto il giocatore 2'

//  } else {
//     return 'pareggio'
//  }

// }
// let risultato = lancio_dado(scelta_utente)
// console.log(risultato);

// Selfwork Dati Strutturali


// let array_1 = [
//     ['un', 'per', 'incatenarli.'],
//     ['Anello', 'trovarli,'],
//     ['ghermirli', 'e'],
//     ['gondor', 'mark'],
// ];

// let array_2 = [
//     [['trovarli,']],
//     ['tu,', 'sciocchi'],
//     ['tu,', 'sciocchi', ['padron', 'Sauron']],
//     ['nel', ['fuggite', 'gandalf']],
//     [['domarli,', 'passare'], 'buio']
// ];


// console.log(array_1[0][0],
//     array_1[1][0],
//     array_1[0][1],
//     array_2[4][0][0],
//     array_1[0][0],
//     array_1[1][0],
//     array_1[0][1],
//     array_1[1][1],
//     array_1[0][0],
//     array_1[1][0],
//     array_1[0][1],
//     array_1[2][0],
//     array_1[2][1],
//     array_2[3][0],
//     array_2[4][1],
//     array_1[0][2]);









