$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(475, 180, 200, 10, "Lime");
    createPlatform(800, 240, 150, 20);
    createPlatform(1000, 370, 150, 30);
    createPlatform(700, 490, 150, 20);
    createPlatform(400, 610 ,150, 180);
    createPlatform(110, 0, 15, 600);

    // TODO 3 - Create Collectables
createCollectable("database", 555, 140);
createCollectable("steve",590 , 400);
createCollectable("max", 1150, 100);



    
    // TODO 4 - Create Cannons
    createCannon("bottom",1100 ,1450);
    createCannon("right",500 ,1700);
    createCannon("top", 1000, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
