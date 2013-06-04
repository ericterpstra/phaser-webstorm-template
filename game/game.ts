// Add a reference to the Phaser library interface so WebStorm knows about it
/// <reference path="../lib/phaser.d.ts" />
/// <reference path="../lib/phaser-fx.d.ts" />

// Add references for other classes added to the game to enable code completion, etc...
/// <reference path="objects/Player.ts" />

// Use import statements so require.js can automatically resolve any dependencies
// Leaving the files separated makes them easier to debug in Chrome
import Game = module('./objects/Player');

(function () {

    // Create game instance and connect init, create, update and render methods
    var myGame: Phaser.Game = new Phaser.Game(this, 'game', 400, 400, init, create, update, render);

    var myPlayer:Game.Player;
    var shake: Phaser.FX.Camera.Shake;
    var x = 1;

    // The first function called when the framework is initialized.
    function init() {
      myGame.stage.scaleMode = Phaser.StageScaleMode.NO_SCALE;

      // Setup loader here
      myGame.loader.addImageFile('jet', 'assets/jets.png');
      myGame.loader.load();
    }

    // This function follows init. It is a good place to create the game screen.
    function create() {
      // Create All the Things!
      myPlayer = new Game.Player(myGame, 100, 100, 'jet');
      shake = <Phaser.FX.Camera.Shake> myGame.camera.fx.add(Phaser.FX.Camera.Shake);
    }

    // Update is called every 'tick'
    function update() {
      if( myGame.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) ) {
        shake.start(0.07, 1);
      }
    }

    // A callback for the game's render event.
    // This happens after the screen is repainted on every 'tick'
    function render() {

      // Just for kicks, lets color cycle the green value of the text
      var g = (Math.sin(x) * 128 + 127)|0;
      x += Math.PI / 32;

      myGame.stage.context.fillStyle = 'rgb(255, ' + g + ', 255)';
      myGame.stage.context.font = 'bold 18px Arial';
      myGame.stage.context.fillText(Phaser.VERSION + " works!", myGame.stage.centerX - 120, myGame.stage.centerY);
    }

})();