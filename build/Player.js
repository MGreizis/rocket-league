import KeyboardListener from './KeyboardListener.js';
import Rocket from './Rocket.js';
import GameItem from './GameItem.js';
import PowerUp from './PowerUp.js';
export default class Player extends GameItem {
    radius;
    keyBoardListener;
    constructor(canvasWidth, canvasHeight) {
        super('Player');
        this.setXPosition(canvasWidth / 2);
        this.setYPosition(canvasHeight / 2);
        this.setSpeed(4);
        this.radius = 15;
        this.keyBoardListener = new KeyboardListener();
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.getXPosition(), this.getYPosition(), this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        ctx.stroke();
    }
    move() {
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_LEFT)) {
            this.setXPosition(this.getXPosition() - this.getSpeed());
        }
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_RIGHT)) {
            this.setXPosition(this.getXPosition() + this.getSpeed());
        }
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_UP)) {
            this.setYPosition(this.getYPosition() - this.getSpeed());
        }
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_DOWN)) {
            this.setYPosition(this.getYPosition() + this.getSpeed());
        }
    }
    collidesWithScoringItem(scoringItems) {
        scoringItems.forEach((scoringItem) => {
            let testX = this.getXPosition();
            let testY = this.getYPosition();
            if (this.getXPosition() < scoringItem.getXPosition()) {
                testX = scoringItem.getXPosition();
            }
            else if (this.getXPosition() > scoringItem.getXPosition() + scoringItem.getImage().width) {
                testX = scoringItem.getXPosition() + scoringItem.getImage().width;
            }
            if (this.getYPosition() < scoringItem.getYPosition()) {
                testY = scoringItem.getYPosition();
            }
            else if (this.getYPosition() > scoringItem.getYPosition() + scoringItem.getImage().height) {
                testY = scoringItem.getYPosition() + scoringItem.getImage().height;
            }
            const distX = this.getXPosition() - testX;
            const distY = this.getYPosition() - testY;
            const distance = Math.sqrt(distX * distX + distY * distY);
            if (distance <= this.radius) {
                if (scoringItem instanceof Rocket)
                    this.radius += 3;
                if (scoringItem instanceof PowerUp) {
                    if (this.radius > 15)
                        this.radius - +3;
                }
                console.log('Collides with Player');
            }
        });
    }
}
//# sourceMappingURL=Player.js.map