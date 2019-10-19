// Calcolo prezzo del treno:
// Il programma dovrà chiedere
// all’utente il numero di chilometri e
// l’età e dovrà calcolare il prezzo totale
// del viaggio.
// Il prezzo del biglietto è definito in
// base ai km (0.21 €cent al km) ma c’è
// uno sconto del 20% per i minorenni e
// del 40% per gli over 65


//variabili iniziali
var ticketPrice = 0.21;
var youngDiscount = 20;
var seniorDiscount = 40;
var  baseRoutePrice, discountVal, youngUser, seniorUser;
var finalRoutePrice = 0;

//Richieste numero chilometri ed età utente, accetta anche num km con la virgola
// var userNumKm = parseFloat(prompt("Quanti km è lungo il viaggio?"));
// var userNumKm = parseFloat(prompt("Quanti km è lungo il viaggio?"));
//
// var userAge = parseInt(prompt("Quanti anni hai?"));
var userNumKm = 1;
var userAge = 1;
//Check User Data
if (isNaN(userNumKm) || userNumKm <= 0 || isNaN(userAge) || userAge <= 0 || userNumKm == "") {
   alert("Dati inseriti mancanti o non validi, ripetere la procedura");
   userNumKm = '\"Dato Errato\" ';
   document.getElementById('error-btn').style.display = "block";
} else {
  //arrotondamento tragitto per difetto primo decimale
  userNumKm = Math.floor(userNumKm * 10) / 10;
  // stabilire sconto in base all età, minorenni 20% , over 65 anni 40%
  baseRoutePrice = userNumKm * ticketPrice;
  if (userAge < 18 ) {
    finalRoutePrice = (baseRoutePrice / 100) * (100 - youngDiscount);
    youngUser = true;
  } else if (userAge > 65) {
    finalRoutePrice = (baseRoutePrice / 100) * (100 - seniorDiscount);
    seniorUser = true;
  } else  {
    finalRoutePrice = baseRoutePrice;
  }
  document.getElementById('print-btn').style.display = "block";
}

//visualizzazione scritta eventuale sconto applicato
discountVal = document.getElementById('discount-value');
userDiscountStr = "Hai diritto ad uno sconto del: ";
if (youngUser === true) {
  discountVal.innerHTML = userDiscountStr + youngDiscount + "%";
} else if (seniorUser === true) {
  discountVal.innerHTML = userDiscountStr + seniorDiscount + "%";
} else {
  discountVal.innerHTML = "Non hai diritto ad alcuno sconto";
}

//visualizzazione prezzo finale sulla pagina
document.getElementById('price-title').innerHTML = "Il prezzo del biglietto per il tragitto di " + userNumKm + "km è di:";
document.getElementById('route-price').innerHTML = finalRoutePrice.toFixed(2) + "€";
