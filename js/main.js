/*
L'utente inserisce negli input il proprio nome, i km che deve percorrere e la fascia d'età. Con questi dati devo calcolare il prezzo del biglietto rendendo l'output dinamico manipolando il DOM
*/

// dichiarazione variabili
var nameU, kmU, ageU, gButton, nameValue, kmValue, ageValue, price, totPrice;
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
    kmValue = kmU.value;
    ageValue = ageU.value;
    console.log(nameValue, kmValue, ageValue);

    // calcolo il prezzo del biglietto
    price = basePrice * kmValue;

    if (ageValue === "Under 18") {
      totPrice = price - (price * scontoMinori);
    } else if (ageValue === "Over 65") {
      totPrice = price - (price * scontoOver65);
    } else {
      totPrice = price;
    }

    console.log(totPrice);

  });