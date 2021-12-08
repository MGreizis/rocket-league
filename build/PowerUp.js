import ScoringItem from './ScoringItem.js';
import GameItem from './GameItem.js';
export default class PowerUp extends ScoringItem {
    constructor(canvasWidth, canvasHeight) {
        super('PowerUp');
        let xPosition = GameItem.randomInteger(0, canvasWidth - 200);
        let yPosition = 0;
        this.setXPosition(xPosition);
        this.setYPosition(yPosition);
        this.setImage(ScoringItem.loadNewImage('./assets/face_on_plus_health.png'));
    }
    move() {
        this.setYPosition(this.getYPosition() + 8);
    }
    outOfCanvas(canvasWidth, canvasHeight) {
        if (this.getYPosition() > canvasHeight) {
            this.setYPosition(0);
        }
    }
    draw(ctx) {
        ctx.drawImage(this.getImage(), this.getXPosition(), this.getYPosition());
    }
}
//# sourceMappingURL=PowerUp.js.map