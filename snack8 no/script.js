var askNumber = prompt("inserisci un numero a 4 cifre");
if (askNumber.length !== 4) {
    alert("inserisci un numero a 4 cifre")
} else if ((isNaN) askNumber) {
    alert ("inserisci un numero")
}
else {
for ( i = 0; i < askNumber.length; i++) {
    document.getElementById("numbers").innerHTML+= parseInt(askNumber[i])
}
}
