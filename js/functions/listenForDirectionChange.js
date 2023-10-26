function listenForDirectionChange(snake, isMobile) {
	if (isMobile) {
		const gameField = document.querySelector('.canvas');
		let touchStartX = 0,
			touchStartY = 0;

		gameField.addEventListener('touchstart', e => {
			e.preventDefault();

			touchStartX = e.touches[0].clientX;
			touchStartY = e.touches[0].clientY;
		});
		gameField.addEventListener('touchmove', e => {
			e.preventDefault();

			if (!touchStartX || !touchStartY) {
				return;
			}

			const touchEndX = e.touches[0].clientX;
			const touchEndY = e.touches[0].clientY;

			const xDiff = touchStartX - touchEndX;
			const yDiff = touchStartY - touchEndY;

			if (Math.abs(xDiff) > Math.abs(yDiff)) {	// свайп по оси X
				if (xDiff > 0) {					// влево
					if (snake.dir !== 'right') {
						snake.changeDirection('left');
					}
				} else {
					if (snake.dir !== 'left') {		// вправо
						snake.changeDirection('right');
					}
				}
			} else {								// свайп по оси Y
				if (yDiff > 0) {					// вверх
					if (snake.dir !== 'bot') {
						snake.changeDirection('top');
					}
				} else {							// вниз
					if (snake.dir !== 'top') {
						snake.changeDirection('bot');
					}
				}
			}
		});
	} else {
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
					e.preventDefault();
					if (snake.dir !== 'bot') {
						snake.changeDirection('top');
					}
					break;
				case 'ArrowDown':
					e.preventDefault();
					if (snake.dir !== 'top') {
						snake.changeDirection('bot');
					}
					break;
				case 'ArrowLeft':
					e.preventDefault();
					if (snake.dir !== 'right') {
						snake.changeDirection('left');
					}
					break;
				case 'ArrowRight':
					e.preventDefault();
					if (snake.dir !== 'left') {
						snake.changeDirection('right');
					}
					break;
			}
		});
	}
}

export default listenForDirectionChange;