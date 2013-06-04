define(["require", "exports", './objects/Player'], function(require, exports, __Game__) {
    var Game = __Game__;

    (function () {
        var myGame = new Phaser.Game(this, 'game', 400, 400, init, create, update, render);
        var myPlayer;
        var x = 1;
        function init() {
            myGame.stage.scaleMode = Phaser.StageScaleMode.NO_SCALE;
            myGame.loader.addImageFile('jet', 'assets/jets.png');
            myGame.loader.load();
        }
        function create() {
            myPlayer = new Game.Player(myGame, 100, 100, 'jet');
        }
        function update() {
        }
        function render() {
            var g = (Math.sin(x) * 128 + 127) | 0;
            x += Math.PI / 32;
            myGame.stage.context.fillStyle = 'rgb(255, ' + g + ', 255)';
            myGame.stage.context.font = 'bold 18px Arial';
            myGame.stage.context.fillText(Phaser.VERSION + " works!", myGame.stage.centerX - 120, myGame.stage.centerY);
        }
    })();
})
//@ sourceMappingURL=game.js.map
