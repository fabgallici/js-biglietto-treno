//variabili iniziali
var ticketPrice = 0.21;
var youngDiscount = 20;
var seniorDiscount = 40;
//Richieste numero chilometri ed età utente
var userNumKm = parseInt(prompt("Quanti km è lungo il viaggio?"));
var userAge = parseInt(prompt("Quanti anni hai?"));

var routePrice = userNumKm * ticketPrice;
console.log(routePrice);
