/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

console.log("esercizio 1")

function checkPalindrome(parola) {
    let lunghezza = parolaD.length;
    for(let i = 0; i < lunghezza / 2; i++) {
        if(parolaD[i] == parolaD[lunghezza - 1 - i]) {
            return true;
        }
    }
    return false;
}

let parola = prompt('Inserisci una parola:');
let parolaD = [];


for(i=0; i<parola.length; i++){
    parolaD.push(parola[i]);
    console.log(parola[i]);
}
console.log(parolaD);


if (checkPalindrome(parola)) {
    console.log("La parola è palindroma")
}else {
    console.log("La parola non è palindroma")
}
