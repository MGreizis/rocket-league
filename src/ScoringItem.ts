import GameItem from './GameItem.js';

export default abstract class ScoringItem extends GameItem {
  private points: number;

  private image: HTMLImageElement;

  public constructor(name: string) {
    super(name);
  }

  public getImage(): HTMLImageElement {
    return this.image;
  }

  public setImage(image: HTMLImageElement): void {
    this.image = image;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.getImage(), this.getXPosition(), this.getYPosition());
  }

  public abstract move(): void;

  public abstract outOfCanvas(canvasWidth: number, canvasHeight: number): void;

  /**
   * Loads an image in such a way that the screen doesn't constantly flicker
   *
   *
   * NOTE: this is a 'static' method. This means that this method must be called like
   * `Game.loadNewImage()` instead of `this.loadNewImage()`.
   *
   * @param source The address or URL of the a media resource that is to be loaded
   * @returns an HTMLImageElement with the source as its src attribute
   */
  protected static loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }
}
