import Fish from './fish.js';
import Avatar from './avatar.js';

const CONSTANTS = {
    BG_COLOR: '#57d8ff',
    DIM_X: 800,
    DIM_Y: 650
}

class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.avatar = new Avatar(this.ctx);
        this.fish = [];
        this.score = 0;

        this.running = true;
    }

    play() {
        this.avatar.keys();
        this.reset();
        this.animate();
    }

    draw() {
        this.ctx.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);
        this.ctx.fillStyle = CONSTANTS.BG_COLOR;
        this.ctx.fillRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);
    }

    animate() {

        if(this.running) {
            this.draw();

            this.avatar.animate();
            this.fish.forEach(f => {
                f.animate();
            });

            if (this.fish.length < 5) {
                this.fish.push(new Fish(this.ctx))
            }

            this.removeSideFish();
            this.checkCollisions();
        }

        requestAnimationFrame(this.animate.bind(this));
    }

    removeSideFish() {
        let newFish = [];

        this.fish.forEach(f => {
            if (f.x < CONSTANTS.DIM_X + 200 && f.x > - 200) {
                newFish.push(f);
            }
        });

        this.fish = newFish;
    }

    checkCollisions() {
        this.fish.forEach((f, idx) => {
            if (this.isCollided(f)) {
                this.collisionResult(f, idx);
            }
        })
    }

    isCollided(fish) {
        const avatarCenX = this.avatar.x + this.avatar.width * .5;
        const avatarCenY = this.avatar.y + this.avatar.height * .5;

        const fCenX = fish.x + fish.width * .5;
        const fCenY = fish.y + fish.height * .5;

        const dx = avatarCenX - fCenX;
        const dy = avatarCenY - fCenY;

        const aveW = (this.avatar.width + fish.width) * .5;
        const aveH = (this.avatar.height + fish.height) * .5;

        if (Math.abs(dx) > aveW || Math.abs(dy) > aveH) return false;
        return true;
    }

    collisionResult(f, idx) {
        if (this.avatar.width > f.width) {
            this.avatar.eat(f);
            this.fish.splice(idx, 1);
            this.score++;
        } else {
            this.gameOver();
        }
    }

    gameOver() {
        this.running = false;
        this.ctx.font = "30px Arial";
        this.ctx.fillText(`Game Over. Fish Eaten: ${this.score}`, 10, 50);
    }

    reset() {
        key("r", () => {
            this.fish = [];
            this.score = 0;
            this.running = true;
            this.avatar.x = CONSTANTS.DIM_X / 2;
            this.avatar.y = CONSTANTS.DIM_Y / 2;
            this.avatar.width = 45;
            this.avatar.height = 15;
            this.avatar.velX = 0;
            this.avatar.velY = 0;

        })
    }
}

export default Game;