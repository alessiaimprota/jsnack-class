// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

const numeroUno = parseInt(prompt("Inserisci il primo numero"));
const numeroDue = parseInt(prompt("inserisci il secondo numero"));
console.log(typeof numeroDue, typeof numeroUno);

if(numeroUno > numeroDue){
    console.log(`il numero maggiore è ${numeroUno}`)
}
else if(numeroDue===numeroUno){
console.log(`i numeri sono uguali`)
}
else {
    console.log(`il numero maggiore è ${numeroDue}`)
};