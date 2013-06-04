/// <reference path="../../lib/phaser.d.ts" />

/**
 * Player is a Phaser GameObject that combines a Circle with a Particle Emitter
 * The Player is controlled via the keyboard arrow keys.
 */
export class Player extends Phaser.GameObject {

  /**
   * A reference to the Circle GeomSprite
   */
  private _circle: Phaser.GeomSprite;

  /**
   * The default emitter attached to the Player
   */
  private _emitter: Phaser.Emitter;

  /**
   * The number of pixels the Player will move per frame.
   * @type {number}
   */
  public speed: number = 4;

  /**
   *
   * @param The primary Phaser.Game reference
   * @param The initial x position of the Player
   * @param The initial y position of the Player
   * @returns {Player}
   */
  constructor(game: Phaser.Game, x: number, y: number, sprite?: string ) {
    super(game, x, y);

    // Create a GeomSprite to act as the Player
    this._circle = game.createGeomSprite(x,y);
    this._circle.createCircle(32);

    // Shoot particles out of the Sprite, because it's fun
    this._emitter = this._game.createEmitter( (x + this._circle.width / 2), (y + this._circle.height / 2) );
    this._emitter.makeParticles( sprite, 50, 0, false, 0 );
    this._emitter.start(false, 50, .1, null);

    game.world.group.add(this);
    return this;
  }

  /**
   * Overrides the GameObject update method..
   * Is called every frame.
   */
  public update(): void {

    if (this._game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
      this.x += this.speed * -1;
    }
    else if (this._game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
      this.x += this.speed;
    }

    if (this._game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
      this.y += this.speed * -1;
    }
    else if (this._game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
      this.y += this.speed;
    }

    this._circle.x = this.x;
    this._circle.y = this.y;
    this._emitter.x = this.x + this._circle.width / 2;
    this._emitter.y = this.y + this._circle.height / 2;

    super.update();

  }

}
