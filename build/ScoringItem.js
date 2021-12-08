import GameItem from './GameItem.js';
export default class ScoringItem extends GameItem {
    points;
    image;
    constructor(name) {
        super(name);
    }
    getImage() {
        return this.image;
    }
    setImage(image) {
        this.image = image;
    }
    draw(ctx) {
        ctx.drawImage(this.getImage(), this.getXPosition(), this.getYPosition());
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
}
//# sourceMappingURL=ScoringItem.js.map