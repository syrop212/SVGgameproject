// randomNumber returns a random number between min and max
function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}

// Overlap
  var canvas1 = document.getElementById("playerArea");
  var width = 85;
  var height = 85;
  var playerX;
  var playerY;
  var foodX;
  var foodY;
  // player
  var yveltalposX = 700;
  var yveltalposY = 300;


document.addEventListener("keydown", function(e) {
if(e.keyCode == 37 || e.keyCode == 65){
  yveltalposX -= 10
 document.getElementById("yveltal").setAttribute("x", yveltalposX)
  }
  else if(e.keyCode == 39|| e.keyCode == 68){
    yveltalposX +=10;
 document.getElementById("yveltal").setAttribute("x", yveltalposX)
  }
  if(e.keyCode == 40 || e.keyCode == 83){
    yveltalposY +=10;
 document.getElementById("yveltal").setAttribute("y", yveltalposY)
  }
  else if(e.keyCode == 38|| e.keyCode == 87){
   yveltalposY -=10;
 document.getElementById("yveltal").setAttribute("y", yveltalposY)
}

var yveltal = document.getElementById("yveltal");
var rarecandy = document.getElementById("rcandy");


playerX = Number(yveltal.getAttribute("x"));
playerY = Number(yveltal.getAttribute("y"));

foodX = Number(rarecandy.getAttribute("x"));
foodY = Number(rarecandy.getAttribute("y"));

if(playerX > foodX && playerX < foodX + width && playerY > foodY && playerY < foodY + height) {
  rarecandy.setAttribute("opacity", 0);

}
else {
  rarecandy.setAttribute("opacity", 1);
}


  })
