import Fish from './fish.js';

const CONSTANTS = {
    BG_COLOR: 'blue',
    DIM_X: 1000,
    DIM_Y: 650
}

class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.fish = [];
    }

    draw() {
        this.ctx.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);
        this.ctx.fillStyle = CONSTANTS.BG_COLOR;
        this.ctx.fillRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);
    }

    animate() {
        this.draw();

        this.fish.forEach(f => {
            f.animate();
        });

        if (this.fish.length < 5) {
            this.fish.push(new Fish(this.ctx))
        }

        this.removeFish();

        requestAnimationFrame(this.animate.bind(this));
    }

    removeFish() {
        let newFish = [];

        this.fish.forEach(f => {
            if (f.x < CONSTANTS.DIM_X + 200 && f.x > - 200) {
                newFish.push(f);
            }
        });

        this.fish = newFish;
    }
}

export default Game;