// SELFWORK OGGETTI 3

let bowling = {
    'players': [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],

    aggiungiGiocatore : function (nome,punteggio) {

        this.players.push( {'name' : nome, 'scores' : punteggio})
        
    },
    
    generatorePunteggi : function () {
        
        this.players.forEach(giocatore => { 
            
            let punteggioTotale =0
            for (let i = 0; i < 10 ; i ++) {
                
                let punteggio = Math.floor(Math.random() * (10 - 1 +1) + 1)
                punteggioTotale += punteggio
            }
            giocatore.scores.push(punteggioTotale)
            console.log(`${giocatore.name} : ${giocatore.scores} `);
        })
    },
    
    classificaFinale: function() {
        this.players.sort((a, b) => {
            const totalA = a.scores.reduce((acc, n) => acc + n, 0);
            const totalB = b.scores.reduce((acc, n) => acc + n, 0);
            return totalB - totalA; 
        });

        console.log("Classifica finale:");
        this.players.forEach((player, i) => {
            console.log(`${i + 1}. ${player.name} - Punteggio totale: ${player.scores.reduce((acc, curr) => acc + curr, 0)}`);
        });

        }
}

bowling.aggiungiGiocatore('Michele',[])
bowling.generatorePunteggi()
bowling.players.sort((firstItem, secondItem) => firstItem.scores - secondItem.scores);
bowling.classificaFinale();
























// // SELFWORK OGGETTI 2:

// let rubrica = {
//     'contacts': [
//         {'nome': 'Nicola', 'telefono': '3331111111'},
//         {'nome': 'Lorenzo', 'telefono': '3332222222'},
//         {'nome': 'Paola', 'telefono': '3333333333'},
//         {'nome': 'Jenny', 'telefono': '3334444444'}
//     ],
    


// 'mostra_contatto' : function(nome) {

//     let contatto= this.contacts.find((el) => el.nome === nome )

//     if (contatto) {
        
//         console.log(`Nome: ${contatto.nome}, Telefono: ${contatto.telefono}`);
  
        
//     } else {
//         console.log("Contatto non trovato");
//     }
// },

// rimuovi_contatto : function (nome_rimosso) {


//     let index= this.contacts.findIndex(contatto => contatto.nome === nome_rimosso )
    
 
    
//     if (index !== -1 ) { 
//         this.contacts.splice(index,1)
//         console.log(`hai elemintato ${nome_rimosso}`);
        
        
//     } else {
//         console.log(`${nome_rimosso} non presente in rubrica`);
        

//     }
// },

// 'aggiungi_contatto' : function (nome,telefono) {

//     this.contacts.push({nome,telefono});
//     console.log(`aggiunto ${nome} ${telefono} `)
    
    
// },
    
// 'mostra_contatti' : function () {

//     let tutti_contatti= this.contacts.forEach((contatto) => console.log(contatto)
//     )
    
// },

// modifica_contatto : function (oldName, newName, newNumber) {

//     this.contacts.forEach((contatto) => { 
//         if (contatto.nome == oldName) { 
//             contatto.nome = newName;
//             contatto.telefono = newNumber;
            
//         }
//     })
// }

// }

// rubrica.mostra_contatti()
// rubrica.rimuovi_contatto('Lorenzo')
// rubrica.aggiungi_contatto('gianfederico',232323232)
// rubrica.mostra_contatto('Nicola')
// rubrica.mostra_contatti()
// rubrica.modifica_contatto('Nicola', 'Matteo',2223433434)
// rubrica.mostra_contatti()







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




