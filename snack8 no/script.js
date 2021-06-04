var askNumber = prompt("inserisci un numero a 4 cifre");
var sum = 0
// if (askNumber.length !== 4) {
//     alert("inserisci un numero a 4 cifre")
// } else if (isNaN(askNumber)) {
//     alert ("inserisci un numero")
// }
// else {
//     // askNumber = 2345
while (askNumber.length < 4) {
    askNumber = prompt("inserisci un numero a 4 cifre");
}
for ( i = 0; i < askNumber.length; i++) {
    sum += parseInt(askNumber[i])
}
document.getElementById("numbers").innerHTML += sum
// }

