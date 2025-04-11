var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
    function createSawBlade(x,y) {
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      
      var obstacleImage = draw.bitmap("img/sawblade.png", - 25, -25);
      sawBladeHitZone.addChild(obstacleImage);

      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);
    }

    function createEnemy(x,y) {
      var enemy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);

      enemy.x = x;
      enemy.y = y;

      game.addGameItem(enemy);

      enemy.velocityX = - 2;
      enemy.rotationalVelocity = 1;

      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-10);

      

      };

      enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.fadeOut();

      }
    }

    function createReward(x,y) {
      var reward = game.createGameItem("reward", 25);
      var greenSquare = draw.rect(50, 50, "Lime");
      greenSquare.x = -25;
      greenSquare.y = -25;
      reward.addChild(greenSquare);

      reward.x = x;
      reward.y = y;

      game.addGameItem(reward);

      reward.velocityX = - 1.5;
      reward.rotationalVelocity = 1;

      reward.onPlayerCollision = function () {
        reward.fadeOut();
        game.increaseScore(+200);

      };

      reward.onProjectileCollision = function () {
        reward.fadeOut();

      }
    }

    function createMarker(x,y) {
      var end = game.createGameItem("levelEnd", 50);
      var purpleSquare = draw.rect(100, 100, "purple");
      purpleSquare.x = -50;
      purpleSquare.y = -50;
      end.addChild(purpleSquare);

      end.x = x;
      end.y = y;

      game.addGameItem(end);

      end.velocityX = - 1.5;
      end.rotationalVelocity = -5;

      end.onPlayerCollision = startLevel()

      end.onProjectileCollision = startLevel();
    }

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData [currentLevel];
      var levelObjects = addGameItem(level);

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
