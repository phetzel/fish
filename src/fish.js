const CONSTANTS = {
    DIM_X: 1000,
    DIM_Y: 650,
    MAX_VELOCITY: 10,
    MAX_HEIGHT: 50
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
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
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