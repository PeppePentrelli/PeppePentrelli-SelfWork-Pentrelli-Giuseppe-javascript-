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

// lancio di dadi giocatore 1

let scelta_utente = Number(prompt('Quanti tiri effettuerai a questo turno?'));

function lancio_dado (numero_lanci) {
let somma = 0

for (let i = 0; i < numero_lanci; i++) {
    let tiro = Math.floor(Math.random() * (6 - 1) + 1) +1
    somma += tiro;   

    console.log('tiro', i+1 ,':', tiro );
}
return somma;

}
let risultato = lancio_dado(scelta_utente)
console.log(`Giocatore 1 hai tirato il dato ${scelta_utente} volte e hai accumulato ${risultato} `);



// lancio di dadi giocatore 2


let scelta_utente2 = Number(prompt('Quanti tiri effettuerai a questo turno?'));

function lancio_dado (numero_lanci) {
let somma = 0

for (let i = 0; i < numero_lanci; i++) {
    let tiro = Math.floor(Math.random() * (6 - 1) + 1) +1
    somma += tiro;   

    console.log('tiro', i+1 ,':', tiro );
}
return somma;

}
let risultato2 = lancio_dado(scelta_utente2)
console.log(`Giocatore 2 hai tirato il dato ${scelta_utente2} volte e hai accumulato ${risultato2} `);