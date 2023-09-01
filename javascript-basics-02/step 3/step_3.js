let div1 = document.createElement("div");
let body1=document.querySelector("body");
body1.appendChild(div1);
let input1 = document.querySelector("#name");

input1.addEventListener("input",function(){

div1.textContent=input1.value;

})
