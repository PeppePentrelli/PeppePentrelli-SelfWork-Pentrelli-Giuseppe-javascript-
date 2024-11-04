// SELFWORK OGGETTI 2:

// Non sono riuscito a finire l'esercizio e non ho aggiunto la funzione per modificare,
// ho avuto molte difficolta a fare questo esercizio ma lo mandato lo stesso per non rimanere bloccato cosi posso avere un feedback. Grazie mille

let rubrica = {
    'contacts': [
        {'nome': 'Nicola', 'telefono': '3331111111'},
        {'nome': 'Lorenzo', 'telefono': '3332222222'},
        {'nome': 'Paola', 'telefono': '3333333333'},
        {'nome': 'Jenny', 'telefono': '3334444444'}
    ],
    


'mostra_contatto' : function(nome) {

    let contatto= this.contacts.find((el) => el.nome === nome )

    if (contatto) {
        
        console.log(`Nome: ${contatto.nome}, Telefono: ${contatto.telefono}`);
  
        
    } else {
        console.log("Contatto non trovato");
    }
},

rimuovi_contatto : function (nome_rimosso) {


    let index= this.contacts.findIndex(contatto => contatto.nome === nome_rimosso )
    
 
    
    if (index !== -1 ) { 
        this.contacts.splice(index,1)
        console.log(`hai elemintato ${nome_rimosso}`);
        
        
    } else {
        console.log(`${nome_rimosso} non presente in rubrica`);
        

    }
},

'aggiungi_contatto' : function (nome,telefono) {

    this.contacts.push({nome,telefono});
    console.log(`aggiunto ${nome} ${telefono} `)
    
    
},
    
'mostra_contatti' : function () {

    let tutti_contatti= this.contacts.forEach((contatto) => console.log(contatto)
    )
    
},

}

rubrica.mostra_contatti()
rubrica.rimuovi_contatto('Lorenzo')
rubrica.aggiungi_contatto('gianfederico',232323232)
rubrica.mostra_contatto('Nicola')





// SELFWORK OGGETTI 1:

// let persona = {

//     nome: 'Giuseppe',
//     cognome: 'Pentrelli',
//     eta: 29,

//     saluta: function () {

//         console.log(`Ciao a tutti il mio nome è ${this.nome} ${this.cognome} e ho ${this.eta} anni`);

//     }
// };
// persona.saluta()




