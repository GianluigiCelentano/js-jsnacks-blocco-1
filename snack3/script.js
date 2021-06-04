var result = []
for (var i = 1; i <= 10; i++) {
    var parolaUno = parseInt(prompt("Inserisci un numero"))
    if (parolaUno % 2!==0) {
        result.push(parolaUno)
    }
}