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

        this.dir = "right";
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

        const eye = this.height / 10;
        this.ctx.fillStyle = "black";

        let radians;
        let triCenX;
        const triCenY = this.y + this.height / 2;

        if (this.dir === "left") {
            this.ctx.fillRect(this.x + this.width / 9, this.y + this.height / 3, eye, eye);
            triCenX = this.x + this.width;
            radians = 180 * Math.PI / 180;
        } else {
            this.ctx.fillRect(this.x + this.width - this.width / 9, this.y + this.height / 3, eye, eye);
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
        this.ctx.fillStyle = "red";
        this.ctx.fill();
        this.ctx.rotate(-radians);
        this.ctx.translate(-triCenX, -triCenY);
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
                    if (this.dir === "right") this.dir = "left";
                }
                break;
            case "right":
                if (this.velX < 10) {
                    this.velX += 1;
                    if (this.dir === "left") this.dir = "right";
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