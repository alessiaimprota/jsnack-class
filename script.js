// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

const numeroUno = parseInt(prompt("Inserisci il primo numero"));
const numeroDue = parseInt(prompt("inserisci il secondo numero"));
console.log(typeof numeroDue, typeof numeroUno);

if(numeroUno > numeroDue){
    console.log(`${numeroUno} è maggiore di ${numeroDue}`)
}
else {
    console.log(`${numeroDue} è maggiore di ${numeroUno}`)
};