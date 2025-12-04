// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
/*
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
*/
/* Il software deve chiedere per 5 volte all’utente di inserire un numero. 
 Il programma stampa la somma di tutti i numeri inseriti. 
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)*/

 let sommaNumeri=0;
 for(let i=0; i < 5; i++){
    let numero = parseInt (prompt("Inserisci un numero"));
    sommaNumeri += numero;
}
console.log(`${sommaNumeri}`)
