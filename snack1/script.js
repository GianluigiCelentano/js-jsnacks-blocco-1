var numeroUno = prompt("Inserisci un numero")
var numeroDue = prompt("Inserisci un secondo numero")
var resultUno = parseInt(numeroUno)
var resultDue = parseInt(numeroDue)
if (resultUno > resultDue) {
    document.getElementById("numbers").innerHTML += resultUno
} else {
    document.getElementById("numbers").innerHTML += resultDue
}