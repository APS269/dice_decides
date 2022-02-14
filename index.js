var rn1=Math.floor(Math.random()*6)+1;
var rdi="dice"+rn1+".png";
var ris="images/"+rdi;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",ris);
var rn2=Math.floor(Math.random()*6)+1;
var ris2="images/dice"+rn2+".png";
document.querySelectorAll("img")[1].setAttribute("src",ris2);
if(rn1>rn2)
{
  document.querySelector("h1").innerHTML="⛳⛳player1 wins!!!!!!!";

}
else if(rn2>rn1)
document.querySelector("h1").innerHTML="⛳⛳player2 wins!!!!";
else
document.querySelector("h1").innerHTML="Draw!!!!!!!";
