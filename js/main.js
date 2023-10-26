'use strict';

import '../style/style.scss';
import '../style/game.scss'

import startMode from './modes/startMode';
import endMode from './modes/endMode';

import listenForDirectionChange from './functions/listenForDirectionChange';
import createFood from './functions/createFood';
import resetFood from './functions/resetFood';

import Snake from './classes/snake';
import Food from './classes/food';

document.addEventListener('DOMContentLoaded', () => {
	
	const canvas = document.querySelector('.canvas');
	const ctx = canvas.getContext('2d'),
		 canvasWidth = canvas.width,
		 canvasHeight = canvas.height;

		 
	const snakeInit = {
		x: 98,
		y: 120
	};
	const foodInit = {
		x: 98,
		y: 64
	}
	const foodAmountInit = 10;

	let animationId = 0;
	let mode = 'start';
	let currentFood = 0;

	const snake = new Snake(snakeInit.x, snakeInit.y, ctx, canvasWidth, canvasHeight);
	const food = new Food(foodInit.x, foodInit.y, ctx, canvasWidth, canvasHeight);
	const foodContainer = createFood(foodAmountInit);


	listenForDirectionChange(snake);


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
				const endBtn = endMode(false);

				endBtn.addEventListener('click', () => {
					reset();

					animationId = requestAnimationFrame(game);
				});

				break;
			case 'win':
				const winBtn = endMode(true);

				winBtn.addEventListener('click', () => {
					reset();

					animationId = requestAnimationFrame(game);
				});

				break;
			case 'game':
				ctx.clearRect(0, 0, canvasWidth, canvasHeight);

				food.draw();
				snake.draw();
				snake.move();
		
				if (snake.isCollisedWithFood(food.x, food.y, food.radius)) {
					foodContainer[currentFood].classList.add('eaten');
					currentFood++;
					if (currentFood === foodAmountInit) {
						mode = 'win';
					} else {
						food.setNewFood();
						snake.increazeSize();
					}
				}
				
				if (snake.isCoillisedWithBorder() || snake.isCollisedWithItself()) {
					mode = 'end';
				}


				animationId = requestAnimationFrame(game);
				break;
		}


		function reset() {
			mode = 'game';
			snake.reset(snakeInit.x, snakeInit.y);
			food.reset(foodInit.x, foodInit.y);
			currentFood = 0;
			resetFood(foodContainer);
		}
	}
	animationId = requestAnimationFrame(game);
});