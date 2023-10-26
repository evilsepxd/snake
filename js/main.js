import '../style/style.scss';
import '../style/game.scss'

import startMode from './modes/startMode';
import endMode from './modes/endMode';

import listenForDirectionChange from './functions/listenForDirectionChange';

import Snake from './classes/snake';
import Food from './classes/food';

document.addEventListener('DOMContentLoaded', () => {
	
	const canvas = document.querySelector('.canvas');
	const ctx = canvas.getContext('2d'),
		 canvasWidth = canvas.width,
		 canvasHeight = canvas.height;

	let animationId = 0;
	let mode = 'start';

	const snakeInit = {
		x: 98,
		y: 120
	};
	const foodInit = {
		x: 98,
		y: 64
	}

	const snake = new Snake(snakeInit.x, snakeInit.y, ctx, canvasWidth, canvasHeight);
	const food = new Food(foodInit.x, foodInit.y, ctx, canvasWidth, canvasHeight);


	function game() {

		switch (mode) {
			case 'start':
				const startBtn = startMode();

				food.draw();
				snake.draw();

				startBtn.addEventListener('click', () => {
					mode = 'game';
					animationId = requestAnimationFrame(game);
				});
				break;
			case 'end':
				const endBtn = endMode();

				endBtn.addEventListener('click', () => {
					mode = 'game';
					snake.reset(snakeInit.x, snakeInit.y);
					food.reset(foodInit.x, foodInit.y);

					animationId = requestAnimationFrame(game);
				});

				break;
			case 'game':
				ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	

				food.draw();
				snake.draw();
				snake.move();
		
				if (snake.isCollisedWithFood(food.x, food.y, food.radius)) {
					food.setNewFood();
					snake.increazeSize();
				}
				
				if (snake.isCoillisedWithBorder() || snake.isCollisedWithItself()) {
					mode = 'end';
				}


				listenForDirectionChange(snake);


				animationId = requestAnimationFrame(game);
				break;
		}

	}
	animationId = requestAnimationFrame(game);
});