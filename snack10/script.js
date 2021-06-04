var result = 0
for (i=1; i<=5; i++) {
   var numbers = parseInt(prompt("inserisci un numero"))
   result += numbers
   document.getElementById("numbers").innerHTML = parseInt(result)
}

// while

var sum=0;
var x=1;
while (x <= 5) {
    var numbers = parseInt(prompt("inserisci un numero"));
    sum += numbers;
    x++;
    document.getElementById("numbers").innerHTML = parseInt(sum)
}
