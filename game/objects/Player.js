var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function(require, exports) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y, sprite) {
                _super.call(this, game, x, y);
            this.speed = 4;
            this._circle = game.createGeomSprite(x, y);
            this._circle.createCircle(32);
            this._emitter = this._game.createEmitter((x + this._circle.width / 2), (y + this._circle.height / 2));
            this._emitter.makeParticles(sprite, 50, 0, false, 0);
            this._emitter.start(false, 50, .1, null);
            game.world.group.add(this);
            return this;
        }
        Player.prototype.update = function () {
            if(this._game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.x += this.speed * -1;
            } else if(this._game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.x += this.speed;
            }
            if(this._game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                this.y += this.speed * -1;
            } else if(this._game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                this.y += this.speed;
            }
            this._circle.x = this.x;
            this._circle.y = this.y;
            this._emitter.x = this.x + this._circle.width / 2;
            this._emitter.y = this.y + this._circle.height / 2;
            _super.prototype.update.call(this);
        };
        return Player;
    })(Phaser.GameObject);
    exports.Player = Player;    
})
//@ sourceMappingURL=Player.js.map
