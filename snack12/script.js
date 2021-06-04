var surnames = ["Bianchi","Conti","Rovesi","Molli","Pinzi"]
var names = ["Girolamo","Settembrino","Osvaldo","Ajeje","Gino"]
var randomNames = names[Math.floor(Math.random()*names.length)]
var randomSurnames = surnames[Math.floor(Math.random()*surnames.length)]
for(i=0; i<=3; i++) {
    document.getElementById("names").innerHTML = randomNames
    document.getElementById("surnames").innerHTML = randomSurnames
}