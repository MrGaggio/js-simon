/*
Visualizzare in pagina 5 numeri casuali poi fateli sparire.
 Da lì parte un timer di 30 secondi.
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


const randomNumber = getRndInteger(1,101)
// console.log(randomNumber);

const randomNumbers = []

// Non fermarti di generare numeri sino a che non arrivi a 5 numeri (while)

while (randomNumbers.length < 5) {
    randomNumbers.push(randomNumber)
    //se randomNumbers non include il numero, aggiungi il numero
    if (!randomNumbers.includes(randomNumber)) {
        
    }else{}
}
console.log(randomNumbers);