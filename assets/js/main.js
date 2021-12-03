/*
Visualizzare in pagina 5 numeri casuali poi fateli sparire.
 Da lì parte un timer di 30 secondi.


 
appaiono i numeri :1234:
spariscono i numeri dal DOM dopo qualche secondo :
parte il conto alla rovescia di 30 secondi 
All'utente, alla fine, dovete dire quanti numeri ha indovinato (NON per forza li deve inserire in ordine). 


---------------------------------------------------------------------------
Vi lascio anche qualche BONUS per il weekend lungo:
L'utente non deve poter inserire numeri minori di zero e del massimo che avete deciso;
L'utente non può scrivere 2 o più volte lo stesso numero;
Proviamo a creare dei livelli di difficoltà selezionabili all'inizio: più il livello è alto più numeri compaiono 
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.

*/








// funzione che genera un numero casuale tra 1 e 100
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


let randomNumber = getRndInteger(1,101)
// console.log(randomNumber);


// array che contiene i numeri
const randomNumbers = []


// Genera 5 numeri casuali e conservali all'interno di un'array
while (randomNumbers.length < 5) {
    let randomNumber = getRndInteger(1,101)
    if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber)
    } else{
        
    }  
}

console.log(randomNumbers);


// selezionare elemento dom
const showNumbers = document.getElementById('show')

// cambiare l'hinner con i risultati contenuti nell'array
showNumbers.innerHTML = `Questi sono i numeri da ricordare:
${randomNumbers}`


// i numeri devono essere visibili per 3 secondi ... al passare dei 3 secondi devo cancellare l'innerHTML
setTimeout(functionNascondi, 3000 );
function functionNascondi() {
    showNumbers.innerHTML = ""
}