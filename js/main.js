/*
L'utente inserisce negli input il proprio nome, i km che deve percorrere e la fascia d'età. Con questi dati devo calcolare il prezzo del biglietto rendendo l'output dinamico manipolando il DOM
*/

// dichiarazione variabili
var nameU, kmU, ageU, gButton, aButton, nameValue, kmValue, ageValue, price, totPrice, nCab, codeCab, logoButton, trainToLeft, logoToLeft, title, fadeContainer;
var basePrice = 0.21; // variabile che rappresenta il prezzo al kilometro
var scontoMinori = 20 / 100; // variabile che rappresenta lo sconto per i minorenni
var scontoOver65 = 40 / 100; // variabile che rappresenta lo sconto per gli Over65


// al click sul logo boolean parte un treno che porta via il logo, lo sfondo diventa blu, appare il titolo e il programma che genererà il biglietto del treno
logoButton = document.getElementById('logo');
trainToLeft = document.getElementById('train2');
logoToLeft = document.getElementById('logo-move');
title = document.getElementById('title-container');
fadeContainer = document.getElementById('first-container');


console.log(trainToLeft);

logoButton.addEventListener('click',

  function() {
    trainToLeft.className = "train-to-left";
    logoToLeft.className = "logo-to-left";
    logoButton.classList.toggle("logo-animate");
    document.getElementById('body').className = "color";
    title.className = "title-animate";
    fadeContainer.className = "fade-in";

  });




// dico alle variabili di salvarsi il riferimento a quell'Id e di tenerlo in memoria

nameU = document.getElementById('name');
kmU = document.getElementById('km');
ageU = document.getElementById('age');
gButton = document.getElementById('genera');
aButton = document.getElementById('annulla');

// imposto di default il valore vuoto per gli input
ageU.value = "";
nameU.value = "";
kmU.value = "";

// dico al bottone "genera" di restare in "ascolto" e cosa deve accadere all'evento click
gButton.addEventListener('click',

  function() {

    // salvo il valore inserito dall'utente in una variabile al click sul bottone "genera"
    nameValue = nameU.value;
    kmValue = parseInt(kmU.value);
    ageValue = ageU.value;

    // calcolo il prezzo del biglietto in base alla fascia d'età dell'utente

    price = basePrice * kmValue;

    if (ageValue === "Under 18") {
      totPrice = price - (price * scontoMinori);
    } else if (ageValue === "Over 65") {
      totPrice = price - (price * scontoOver65);
    } else {
      totPrice = price;
    }

    // se il valore inserito nell'input dei km da percorrere non è un numero allora il programma lo segnalerà all'utente forzandolo a reinserire un valore numerico

    if (isNaN(kmValue)) {

      alert("Il valore dei km da percorrere non è corretto, è pregato di inserire un valore numerico. Grazie!");

      nameValue = "";
      kmValue = "";
      ageValue = "";

      document.getElementById('km').value = kmValue;

      // altrimenti proseguirà normalmente

    } else {

      // creo un numero casuale da 1 a 10 che corrisponderà al numero della cabina
      nCab = Math.floor(Math.random() * 10 + 1);

      // creo un numero casuale che corrisponderà al codice cp della cabina
      codeCab = Math.round(Math.random() * 99000 + 1000);


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
      document.getElementById('second-container').className = "visible";

    }

  });


// dico al bottone "annulla" di restare in "ascolto" e cosa deve accadere all'evento click

aButton.addEventListener('click',

  function() {

    // al momento del click sul bottone "annulla" scompare il secondo blocco

    document.getElementById('second-container').classList.remove('visible');

    // al momento del click sul bottone "annulla" si resettano tutti valori che l'utente ha inserito negli input

    nameValue = "";
    kmValue = "";
    ageValue = "";

    document.getElementById('name').value = nameValue;
    document.getElementById('km').value = kmValue;
    document.getElementById('age').value = ageValue;

  });