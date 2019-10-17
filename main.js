//variabili iniziali
var ticketPrice = 0.21;
var youngDiscount = 20;
var seniorDiscount = 40;
var finalRoutePrice;
var youngUser, seniorUser;

//Richieste numero chilometri ed età utente
var userNumKm = parseInt(prompt("Quanti km è lungo il viaggio?"));
var userAge = parseInt(prompt("Quanti anni hai?"));

var baseRoutePrice = userNumKm * ticketPrice;
// console.log(baseRoutePrice);

// stabilire sconto in base all età,
// minorenni 20% , over 65 anni 40%
if (userAge < 18 ) {
  finalRoutePrice = (baseRoutePrice / 100) * (100 - youngDiscount);
  youngUser = true;
} else if (userAge > 65) {
  finalRoutePrice = (baseRoutePrice / 100) * (100 - seniorDiscount);
  seniorUser = true;
} else  {
  finalRoutePrice = baseRoutePrice;
}
// console.log(finalRoutePrice);

//visualizzazione scritta eventuale sconto applicato
if (youngUser === true) {
  document.getElementById('discount-value').innerHTML = "Hai diritto ad uno sconto del: " + youngDiscount + "%";
} else if (seniorUser === true) {
  document.getElementById('discount-value').innerHTML = "Hai diritto ad uno sconto del: " + seniorDiscount + "%";
} else {
  document.getElementById('discount-value').innerHTML = "Non hai diritto ad alcuno sconto";
}

//visualizzazione prezzo finale sulla pagina
document.getElementById('price-title').innerHTML = "Il prezzo del biglietto è di:";
document.getElementById('route-price').innerHTML = finalRoutePrice + "€";
