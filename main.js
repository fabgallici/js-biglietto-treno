//variabili iniziali
var ticketPrice = 0.21;
var youngDiscount = 20;
var seniorDiscount = 40;
var finalRoutePrice;
//Richieste numero chilometri ed età utente
var userNumKm = parseInt(prompt("Quanti km è lungo il viaggio?"));
var userAge = parseInt(prompt("Quanti anni hai?"));

var baseRoutePrice = userNumKm * ticketPrice;
console.log(baseRoutePrice);

// stabilire sconto in base all età,
// minorenni 20% , over 65 anni 40%
if (userAge < 18 ) {
  finalRoutePrice = (baseRoutePrice / 100) * (100 - youngDiscount);
} else if (userAge > 65) {
  finalRoutePrice = (baseRoutePrice / 100) * (100 - seniorDiscount);
} else  {
  finalRoutePrice = baseRoutePrice;
}

console.log(finalRoutePrice);
