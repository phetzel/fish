const CONSTANTS = {
    DIM_X: 800,
    DIM_Y: 650,
    MAX_VELOCITY: 10,
    MAX_HEIGHT: 50,
    COLORS: ["#00ff00", "#00ffff", "#ff00ff", "#ff0080"]
};

class Fish {
    constructor(ctx) {
        this.ctx = ctx;

        this.height = Math.floor(Math.random() * CONSTANTS.MAX_HEIGHT + 1);
        this.width = this.height * 3;
        this.vel = Math.floor(Math.random() * CONSTANTS.MAX_VELOCITY + 1);

        this.y;
        this.x;
        this.dir;
        
        this.color = CONSTANTS.COLORS[Math.floor(Math.random() * CONSTANTS.COLORS.length)];

        this.birthFish();
    }


    birthFish() {
        this.y = Math.floor(Math.random() * (CONSTANTS.DIM_Y - this.height));
        
        const side = Math.floor(Math.random() * 2);
        if (side === 0) {
            this.x = 0 - this.width;
            this.dir = "right";
        } else {
            this.x = CONSTANTS.DIM_X;
            this.dir = "left"
        }
    }

    animate() {
        this.draw();
        this.move();
    }

    draw() {
        //Body
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.save();

        //fin
        let radians;
        let triCenX;
        const triCenY = this.y + this.height / 2;

        if (this.dir === "left") {
            triCenX = this.x + this.width;
            radians = 180 * Math.PI / 180;
        } else {
            triCenX = this.x;
            radians = 120 * Math.PI / 180;
        }

        this.ctx.translate(triCenX, triCenY);
        this.ctx.rotate(radians);
        this.ctx.beginPath();
        this.ctx.moveTo(this.height * Math.cos(0), this.height * Math.sin(0));
        this.ctx.lineTo(this.height * Math.cos(1 * 2 * Math.PI / 3), this.height * Math.sin(1 * 2 * Math.PI / 3));
        this.ctx.lineTo(this.height * Math.cos(2 * 2 * Math.PI / 3), this.height * Math.sin(2 * 2 * Math.PI / 3));
        this.ctx.lineTo(this.height * Math.cos(3 * 2 * Math.PI / 3), this.height * Math.sin(3 * 2 * Math.PI / 3));
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.rotate(-radians);
        this.ctx.translate(-triCenX, -triCenY);

        //eye
        const eye = this.height / 10;
        this.ctx.fillStyle = "black";

        if (this.dir === "left") {
            this.ctx.fillRect(this.x + this.width / 9, this.y + this.height / 3, eye, eye);
        } else {
            this.ctx.fillRect(this.x + this.width - this.width / 9, this.y + this.height / 3, eye, eye)
        }

    }

    move() {
        if (this.dir === "right") {
            this.x += this.vel;
        } else {
            this.x -= this.vel;
        }
    }
}

export default Fish;