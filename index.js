document.querySelector(".button").addEventListener("click",change);
function change(){
var blackHole = "black hole.jpg";
 document.getElementsByClassName("star")[0].setAttribute("src",blackHole);}


 document.getElementsByClassName("tap-content")[0].style.display ="none";
 document.querySelector(".tap").addEventListener("click",show);
 function show(){
   document.getElementsByClassName("tap-content")[0].style.display ="block";
 }
