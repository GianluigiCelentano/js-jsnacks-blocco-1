var askNumber = parseInt(prompt("Inserisci un numero"))
if (askNumber % 2 === 0) {
    document.getElementById("numbers").innerHTML = askNumber
} else {
    document.getElementById("numbers").innerHTML = askNumber + 1
}