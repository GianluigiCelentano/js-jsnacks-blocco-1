var surnames = ["Bianchi","Conti","Rovesi","Molli","Pinzi"]
var names = ["Girolamo","Settembrino","Osvaldo","Ajeje","Gino"]
for(i=1; i<=3; i++) {
    var randomNames = names[Math.floor(Math.random()*names.length)]
    var randomSurnames = surnames[Math.floor(Math.random()*surnames.length)]
    document.getElementById("names").innerHTML += "<br>" + randomNames + " " + randomSurnames
}