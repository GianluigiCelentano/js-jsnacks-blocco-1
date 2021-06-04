var askName = prompt("Nome e cognome");
var databaseName = ["Paolo Bonolis", "So Lillo", "Panno Carta"];
var check = false
for (var i = 0; i < databaseName.length; i++){
    if(askName === databaseName[i]){
        check = true;
    }
}
if(check) {
    alert ("Benvenuto alla festa")
    document.getElementById("numbers").innerHTML += "Buon divertimento"
} else {
    alert ("Nome non presente")
}