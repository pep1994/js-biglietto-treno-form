/*
L'utente inserisce negli input il proprio nome, i km che deve percorrere e la fascia d'età. Con questi dati devo calcolare il prezzo del biglietto rendendo l'output dinamico manipolando il DOM
*/

// dichiarazione variabili
var nameU, kmU, ageU, gButton, nameValue, kmValue, ageValue;


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

  });