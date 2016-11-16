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
