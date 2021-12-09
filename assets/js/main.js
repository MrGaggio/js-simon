/*
Visualizzare in pagina 5 numeri casuali poi fateli sparire.
 Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
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


// array che contiene i numeri che vengono generati random
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

// questi sono i numeri inseriti dall'utente
let checkNumbers = []

// i numeri devono essere visibili per 3 secondi ... al passare dei 3 secondi devo cancellare l'innerHTML
setTimeout(functionNascondi, 3000 );
function functionNascondi() {
    showNumbers.innerHTML = ""

    // parte un cowntdown di 5 secondi al termine del quale l'utente deve inserire i cinque numeri che ha visto a video
    setTimeout(function30Sec, 5000)
    function function30Sec() {
        //i 5 numeri devono essere richiesti tramite prompt  (uno alla volta)
        for (let i = 0; i < 5; i++) {
        let checkNumber = parseInt(prompt('inserisci i numeri visti in precedenza'))
            checkNumbers.push(checkNumber)
        }
        console.log(checkNumbers);

// bisogna confrontare i singoli elementi salvati all'interno dei 2 array di numeri, se sono uguali comunicare che sono uguali altrimenti comunicare le differenze
// ogni sincolo indice del primo array deve essere confrontato con quelli contenuti nel secondo

//Quali sono gli indici presenti in checkNumbers che lo sono anche in randomN
    
    const verifiedNumbers = []
        for (let i = 0; i < checkNumbers.length; i++) {
            const element = checkNumbers[i]
            if (checkNumbers.includes(element)) {
                verifiedNumbers.push(element)
            }
            // RICONTROLLARE L'IF DI SERA
        }

        showNumbers.innerHTML = `Hai indovinato ${verifiedNumbers.length} numeri`

    }
}





/*
StackOverflow function

a.every(item => b.includes(item)) && b.every(item => a.includes(item))


randomNumbers.every(item => checkNumbers.includes(item)) && checkNumbers.every(item => randomNumbers.includes(item)) 
restituisce vero o falso

*/

/* for (let i = 0; i < randomNumbers.length; i++) {
    const verifiedNumbers = []
    if (checkNumbers[i] == randomNumbers[i]) {
        verifiedNumbers.push(i)
        console.log(`hai indovinato i seguenti numeri ${verifiedNumbers}`);
    }else {
        console.log(false);
    }
    
} */


