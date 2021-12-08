import ScoringItem from './ScoringItem.js';
import GameItem from './GameItem.js';

export default class PowerUp extends ScoringItem {
  constructor(canvasWidth: number, canvasHeight: number) {
    super('PowerUp');

    let xPosition = GameItem.randomInteger(0, canvasWidth - 200);
    let yPosition = 0;

    this.setXPosition(xPosition);
    this.setYPosition(yPosition);

    this.setImage(ScoringItem.loadNewImage('./assets/face_on_plus_health.png'));
  }

  public move(): void {
    this.setYPosition(this.getYPosition() + 8);
  }

  public outOfCanvas(canvasWidth: number, canvasHeight: number): void {
    if (this.getYPosition() > canvasHeight) {
      this.setYPosition(0);
    }
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.getImage(), this.getXPosition(), this.getYPosition());
  }
}
