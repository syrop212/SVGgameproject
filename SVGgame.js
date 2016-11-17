  var yveltalposX = 700;
  var yveltalposY = 300;

  document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37) {
    yveltalposX -= 10;
    document.getElementById("yveltal").setAttribute("x", yveltalposX);
  }

  else if(e.keyCode == 39) {
    yveltalposX += 10;
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
  var canvas = document.getElementById("svgGame");
  var width = 30;
  var height = 30;
  var playerX
  var playerY
  var foodX
  var foodY

  canvas.addEventListener("keydown", function(e) {
    var yveltal = document.getElementById("yveltal");
    var rarecandy = document.getElementById("rcandy");

    playerX = Number(yveltal.getAttribute("x"));
    playerY = Number(yveltal.getAttribute("y"));

    foodX = Number(rarecandy.getAttribute("x"));
    foodY = Number(rarecandy.getAttribute("y"));

    if(playerX > foodX){
      yveltal.setAttribute("opacity", 1);
      rarecandy.setAttribute("opacity", 0);
    }
    else {
      yveltal.setAttribute("opacity", 1);
      rarecandy.setAttribute("opacity", 1);
    }
    if(playerX < foodX + width) {
      yveltal.setAttribute("opacity", 1);
      rarecandy.setAttribute("opacity", 0);
    }
    else {
      yveltal.setAttribute("opacity", 1);
      rarecandy.setAttribute("opacity", 1);
    }
    if(playerY > foodY) {
      yveltal.setAttribute("opacity", 1);
      rarecandy.setAttribute("opacity", 0);
    }
    else {
      yveltal.setAttribute("opacity", 1);
      rarecandy.setAttribute("opacity", 1);
    }
    if(playerY < foodY + height) {
      yveltal.setAttribute("opacity", 1);
      rarecandy.setAttribute("opacity", 0);
    }
    else {
      yveltal.setAttribute("opacity", 1);
      rarecandy.setAttribute("opacity", 1);
    }
  })
