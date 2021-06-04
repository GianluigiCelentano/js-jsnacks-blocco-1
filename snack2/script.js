var parolaUno = prompt("Inserisci una parola")
var parolaDue = prompt("Inserisci un'altra parola'")
var resultUno = parolaUno.length
var resultDue = parolaDue.length
if (parolaUno < parolaDue) {
    document.getElementById("numbers").innerHTML += parolaUno
    document.getElementById("numbers2").innerHTML += parolaDue
} else {
    document.getElementById("numbers2").innerHTML += parolaDue
    document.getElementById("numbers").innerHTML += parolaUno
}