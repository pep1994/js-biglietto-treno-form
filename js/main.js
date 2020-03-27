/*
L'utente inserisce negli input il proprio nome, i km che deve percorrere e la fascia d'età. Con questi dati devo calcolare il prezzo del biglietto rendendo l'output dinamico manipolando il DOM
*/

// dichiarazione variabili
var nameU, kmU, ageU, gButton, nameValue, kmValue, ageValue, price, totPrice, nCab, codeCab;
var basePrice = 0.21; // variabile che rappresenta il prezzo al kilometro
var scontoMinori = 20 / 100; // variabile che rappresenta lo sconto per i minorenni
var scontoOver65 = 40 / 100; // variabile che rappresenta lo sconto per gli Over65


// dico alle variabili di salvarsi il riferimento a quell'Id e di tenerlo in memoria

nameU = document.getElementById('name');
kmU = document.getElementById('km');
ageU = document.getElementById('age');
gButton = document.getElementById('genera');


// dico al bottone genera di restare in "ascolto" e cosa deve accadere all'evento click

gButton.addEventListener('click',

  function() {

    // salvo il valore inserito dall'utente in una variabile al click sul bottone genera
    nameValue = nameU.value;
    kmValue = parseInt(kmU.value);
    ageValue = ageU.value;
    console.log(nameValue, kmValue, ageValue);

    // calcolo il prezzo del biglietto in base alla fascia d'età dell'utente
    price = basePrice * kmValue;

    if (ageValue === "Under 18") {
      totPrice = price - (price * scontoMinori);
    } else if (ageValue === "Over 65") {
      totPrice = price - (price * scontoOver65);
    } else {
      totPrice = price;
    }

    console.log(totPrice);

    // creo un numero casuale da 1 a 10 che corrisponderà al numero della cabina
    nCab = Math.floor(Math.random() * 10 + 1);
    console.log(nCab);

    // creo un numero casuale che corrisponderà al codice cp della cabina
    codeCab = Math.round(Math.random() * 99000 + 1000);
    console.log(codeCab);

    // output nome utente sul biglietto
    document.getElementById('userName').innerHTML = nameValue;

    // output offerta sul biglietto
    document.getElementById('type-ticket').innerHTML = ageValue;

    // output nome utente sul biglietto
    document.getElementById('userName').innerHTML = nameValue;

    // output nome utente sul biglietto
    document.getElementById('ticket-price').innerHTML = totPrice.toFixed(2) + "€";

    // output numero cabina sul biglietto
    document.getElementById('number-cab').innerHTML = nCab;

    // output codice cp cabina sul biglietto
    document.getElementById('code-ticket').innerHTML = codeCab;

    // aggiunta di una classe al secondo blocco in modo da farlo comparire al click sul bottone
    document.getElementById('second-container').className = "visible"


  });