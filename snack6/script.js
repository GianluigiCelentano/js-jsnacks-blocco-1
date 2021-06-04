var numbers = parseInt(prompt("inserisci un numero"));
for (var i = 1; i <= numbers; i++) {
    document.getElementById("numbers").innerHTML += "<br>" + Math.pow(i, 3);
}
