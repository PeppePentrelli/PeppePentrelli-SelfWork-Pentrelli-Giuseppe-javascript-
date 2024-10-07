// Selfwork Dati Strutturali


let array_1 = [
    ['un', 'per', 'incatenarli.'],
    ['Anello', 'trovarli,'],
    ['ghermirli', 'e'],
    ['gondor', 'mark'],
];

let array_2 = [
    [['trovarli,']],
    ['tu,', 'sciocchi'],
    ['tu,', 'sciocchi', ['padron', 'Sauron']],
    ['nel', ['fuggite', 'gandalf']],
    [['domarli,', 'passare'], 'buio']
];


console.log(array_1[0][0],
    array_1[1][0],
    array_1[0][1],
    array_2[4][0][0],
    array_1[0][0],
    array_1[1][0],
    array_1[0][1],
    array_1[1][1],
    array_1[0][0],
    array_1[1][0],
    array_1[0][1],
    array_1[2][0],
    array_1[2][1],
    array_2[3][0],
    array_2[4][1],
    array_1[0][2]);



// Selfwork funzioni 1



let scelta_utente = Number(prompt('Quanti tiri effettuerai a questo turno?'));

function lancio_dado (numero_lanci) {
let somma = 0
let somma2 = 0


for (let i = 0; i < numero_lanci; i++) {

    somma +=  Math.floor(Math.random() * (6 - 1) + 1) +1;
    somma2 +=  Math.floor(Math.random() * (6 - 1) + 1) +1;

}
console.log(somma);
console.log(somma2);
if (somma > somma2) {
    
    return 'ha vinto il giocatore 1'

    
} else if(somma2 > somma ) {

    return 'ha vinto il giocatore 2'

 } else {
    return 'pareggio'
 }

}
let risultato = lancio_dado(scelta_utente)
console.log(risultato);

// selfwork Funzioni 2


function stampa (num) {

    for (i = 1; i <= num; i++) {
        
        if (i % 15 == 0) {

           console.log('FizzBuzz');
           
            
        } else if (i % 5 == 0) {
            
             console.log('Buzz');
             
        } else if(i % 3 == 0) { 

            console.log('fizz');
            
        } else { 
            console.log(i);
            
        }
        
    } 
    
}
stampa(100)

