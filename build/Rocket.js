import GameItem from './GameItem.js';
import ScoringItem from './ScoringItem.js';
export default class Rocket extends ScoringItem {
    type;
    constructor(type, canvasWidth, canvasHeight) {
        super('Rocket');
        let xPosition = GameItem.randomInteger(0, canvasWidth - 200);
        let yPosition = GameItem.randomInteger(0, canvasHeight - 200);
        if (type === 'leftToRight') {
            xPosition = 0;
            this.setImage(Rocket.loadNewImage('./assets/rocket-horizontal.png'));
        }
        else {
            yPosition = 0;
            this.setImage(Rocket.loadNewImage('./assets/rocket-vertical.png'));
        }
        this.setXPosition(xPosition);
        this.setYPosition(yPosition);
        this.type = type;
        this.setSpeed(GameItem.randomInteger(5, 15));
    }
    draw(ctx) {
        ctx.drawImage(this.getImage(), this.getXPosition(), this.getYPosition());
    }
    move() {
        if (this.type === 'leftToRight') {
            this.setXPosition(this.getXPosition() + this.getSpeed());
        }
        else {
            this.setYPosition(this.getYPosition() + this.getSpeed());
        }
    }
    outOfCanvas(canvasWidth, canvasHeight) {
        if (this.type === 'leftToRight') {
            if (this.getXPosition() + this.getImage().width >= canvasWidth) {
                this.setXPosition(0);
                this.setYPosition(GameItem.randomInteger(0, canvasHeight));
            }
        }
        else if (this.getYPosition() + this.getImage().height >= canvasHeight) {
            this.setYPosition(0);
            this.setXPosition(GameItem.randomInteger(0, canvasWidth));
        }
    }
}
//# sourceMappingURL=Rocket.js.map