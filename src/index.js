import Game from './game.js';


document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById('my-canvas');
    canvas.width = 800;
    canvas.height = 650;
    const ctx = canvas.getContext('2d');

    const g = new Game(ctx);
    g.play();
})