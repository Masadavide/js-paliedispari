/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


console.log("esercizio 2 pari e dispari")

function sumNumber(){
    let result = numberUser + numberCpu;

    return result;
}

let evenOdd = prompt('pari o dispari?');
let numberUser = '';
let numberCpu ='';
let sum = 0;

if ((evenOdd == 'pari') || (evenOdd == 'Pari') || (evenOdd == 'dispari') || (evenOdd == 'Dispari')){
    numberUser = parseInt(prompt('Inserisci numero da 1 a 5:'));
    if ((numberUser == 0) || (numberUser == 1) || (numberUser == 2) ||(numberUser == 3) ||(numberUser ==4) || (numberUser == 5)){
        numberCpu = Math.floor(Math.random() * 5 + 1);
        sum = sumNumber(numberUser, numberCpu);
        
        
        console.log('pari o dispari? ', evenOdd);
        console.log('numero utente: ', numberUser);
        console.log('numero cpu: ', numberCpu);
        console.log('somma: ', sum);
        
        if (((evenOdd == 'pari') || (evenOdd == 'Pari')) && (sum % 2 == 0)){
            console.log('Hai vinto.')
        }else if(((evenOdd == 'dispari') || (evenOdd == 'Dispari')) && (sum % 2 != 0)){
            console.log('Hai vinto.')
        }else{
            console.log('Hai perso')
        }
    }else{
        alert('Ricarica la pagina')
    }
}else{
    alert('Ricarica la pagina')
}






