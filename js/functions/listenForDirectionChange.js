function listenForDirectionChange(snake) {

	const arrowTop = document.querySelector('.arrows__arrow_top'),
		 arrowLeft = document.querySelector('.arrows__arrow_left'),
		 arrowBot = document.querySelector('.arrows__arrow_bot'),
		 arrowRight = document.querySelector('.arrows__arrow_right');

	arrowTop.addEventListener('click', () => {
		if (snake.dir !== 'bot') {
			snake.changeDirection('top');
		}
	});
	arrowBot.addEventListener('click', () => {
		if (snake.dir !== 'top') {
			snake.changeDirection('bot');
		}
	});
	arrowLeft.addEventListener('click', () => {
		if (snake.dir !== 'right') {
			snake.changeDirection('left');
		}
	});
	arrowRight.addEventListener('click', () => {
		if (snake.dir !== 'left') {
			snake.changeDirection('right');
		}
	});
	

	document.addEventListener('keydown', e => {
		switch (e.key) {
			case 'ArrowUp':
				if (snake.dir !== 'bot') {
					snake.changeDirection('top');
				}
				break;
			case 'ArrowDown':
				if (snake.dir !== 'top') {
					snake.changeDirection('bot');
				}
				break;
			case 'ArrowLeft':
				if (snake.dir !== 'right') {
					snake.changeDirection('left');
				}
				break;
			case 'ArrowRight':
				if (snake.dir !== 'left') {
					snake.changeDirection('right');
				}
				break;
		}
	});
}

export default listenForDirectionChange;