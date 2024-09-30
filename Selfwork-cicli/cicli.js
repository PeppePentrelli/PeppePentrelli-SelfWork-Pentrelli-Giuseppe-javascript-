// Selfwork cicli -1

let num = 2

for (i = 1; i <= 10; i++) {
    let operazione = num * i


    console.log(`${num}*${i} = ${operazione}`);

}



// Selfwork cicli -2

let numeri_pari
let numeri_dispari

for (i=1 ; i <=10; i++) {(numeri_pari = 2*i)  

    console.log(`i numeri pari da 1 a 20 sono: ${numeri_pari}`);
   

    }

    for (i = 1; i <= 20; i += 2) { numeri_dispari = 0 +i 

   console.log(`i numeri dispari da 1 a 20 sono: ${numeri_dispari}`); 
   

}

    
let sommadispari = 0;

for (let i = 1; i <= 20; i += 2) {
  
  sommadispari += i; 
}

console.log(`la somma di tutti i numeri dispari è: ${sommadispari}`);


let media = sommadispari / 10 ;

console.log(`la media di tutti i numeri dispari è ${media}`);


