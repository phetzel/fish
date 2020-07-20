const CONSTANTS = {
    DIM_X: 800,
    DIM_Y: 650,
    MAX_VELOCITY: 5,
    MAX_HEIGHT: 50
};

class Avatar {
    constructor(ctx) {
        this.ctx = ctx;

        this.x = CONSTANTS.DIM_X / 2;
        this.y = CONSTANTS.DIM_Y / 2;

        this.width = 45;
        this.height = 15;

        this.velX = 0;
        this.velY = 0;
    }

    animate() {
        if (this.x + this.velX > 0 && this.x + this.velX + this.width< CONSTANTS.DIM_X) {
            this.x += this.velX;
        } else {
            this.VelX = 0;
        }

        if (this.y + this.velY > 0 && this.y + this.velY + this.height < CONSTANTS.DIM_Y) {
            this.y += this.velY;
        } else {
            this.velY = 0;
        }
        
        this.draw();
    }

    draw() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    keys() {
        key("a", () => {
            this.move("left");
        });
        key("d", () => {
            this.move("right");
        });
        key("w", () => {
            this.move("top");
        });
        key("s", () => {
            this.move("bottom");
        });
    }

    move(dir) {
        switch(dir) {
            case "left":
                if (this.velX > - 10) {
                    this.velX -= 1;
                }
                break;
            case "right":
                if (this.velX < 10) {
                    this.velX += 1;
                }
                break;
            case "top":
                if (this.velY > - 10) {
                    this.velY -= 1;
                }
                break;
            case "bottom":
                if (this.velY < 10) {
                    this.velY += 1;
                }
                break;
        }
    }

    eat(fish) {
        this.width += (fish.width * .25);
        this.height += (fish.height * .25);
    } 
}

export default Avatar;