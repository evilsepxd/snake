import '../style/style.scss';

import Snake from './classes/snake';
import Food from './classes/food';

document.addEventListener('DOMContentLoaded', () => {
	
	const canvas = document.querySelector('.game');
	const ctx = canvas.getContext('2d'),
		 canvasWidth = canvas.width,
		 canvasHeight = canvas.height;

	const snake = new Snake(98, 120, ctx);
	const food = new Food(98, 64, ctx);

	function game() {

		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	
		food.draw();
		snake.draw();
		
		snake.move();

		requestAnimationFrame(game);
	}
	const animationId = requestAnimationFrame(game);

	// получить случайное число для генерации еды на поле
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
});