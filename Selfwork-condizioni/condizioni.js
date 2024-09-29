// Selfwork-condizioni-1 / uso di if-,else.

let v = prompt('inserisci il tuo voto');
if (v > 0 && v < 18) {
    console.log('insufficiente');
}
else if (v >= 18 && v < 21) {
    console.log('sufficente');
}
else if (v >= 21 && v < 24) {
    console.log('buono');
}
else if (v >= 24 && v <= 27) {
    console.log('distinto');
}
else if (v >= 27 && v <= 29) {
    console.log('ottimo');
}
else if (v == 30) {
    console.log('eccelente');
}
else {
    console.log('inserisci un voto compreso tra 0 e 30');
}


// Selfwork-condizioni-1 / uso swich.

let voto = prompt('inserisci il tuo voto');
switch (true) {

    case voto > 0 && voto < 18:
        console.log('insufficiente');
        break

    case voto >= 18 && voto < 21:
        console.log('sufficiente');
        break

    case voto >= 21 && voto < 24:
        console.log('distinto');
        break

    case voto >= 18 && voto < 27:
        console.log('ottimo');
        break

    case voto == 30:
        console.log('eccelente');
        break

    default:
        console.log('inserisci un voto compreso tra 0 e 30');
        break

}