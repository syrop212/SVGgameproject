  var yveltalposX = 700;
  var yveltalposY = 300;

  document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37 ) {
    yveltalposX -= 10;

    document.getElementById("yveltal").setAttribute("x", yveltalposX);
  }
  else if(e.keyCode == 39) {
    yveltalposY += 10;
    document.getElementById("yveltal").setAttribute("x", yveltalposX);
  }

  })

  document.addEventListener("keydown", function(e) {
  if(e.keyCode == 38) {
    yveltalposY -= 10;
    document.getElementById("yveltal").setAttribute("y", yveltalposY);
  }

  else if(e.keyCode == 40) {
    yveltalposY += 10;
    document.getElementById("yveltal").setAttribute("y", yveltalposY);
  }
  })
// Overlap
  var canvas1 = document.getElementById("playerArea");
  var width = 85;
  var height = 85;
  var playerX;
  var playerY;
  var foodX;
  var foodY;

  canvas1.addEventListener("keydown", function(e) {
    var yveltal = document.getElementById("yveltal");
    var rarecandy = document.getElementById("rcandy");

    playerX = Number(yveltal.getAttribute("x"));
    playerY = Number(yveltal.getAttribute("y"));

    foodX = Number(rarecandy.getAttribute("x"));
    foodY = Number(rarecandy.getAttribute("y"));

    if(playerX > foodX && playerX < foodX + width && playerY > foodY && playerY < foodY + height) {
      rarecandy.setAttribute("opacity", 0);
      console.log("eaten");
    }
    else {
      rarecandy.setAttribute("opacity", 1);
    }

  })
