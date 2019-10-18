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
var finalRoutePrice, baseRoutePrice, discountVal, youngUser, seniorUser;


//Richieste numero chilometri ed età utente, accetta anche num km con la virgola
var userNumKm = parseFloat(prompt("Quanti km è lungo il viaggio?"));
var userAge = parseInt(prompt("Quanti anni hai?"));

//Check User Data
if (typeof userNumKm == 'number') {
  console.log("correct data");
} else {
  console.log("errore");
}
// if (userNumKm === Number.Nan) {
//   alert('invalid data');
//   console.log("errore");
// }

//arrotondamento tragitto per difetto primo decimale
userNumKm = Math.floor(userNumKm * 10) / 10;
// stabilire sconto in base all età,
// minorenni 20% , over 65 anni 40%
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
