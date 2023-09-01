var shoesize = parseFloat(prompt("enter a shoe size: "));
var birthyear = parseFloat(prompt("enter your birth year"));
 function calculation() {
   var result = ((shoesize * 2) + 5) * 50 - birthyear + 1766;
   alert(result);
} 

calculation()