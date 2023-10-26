function createArrows(isMobile) {
	const container = document.querySelector('.arrows');

	const text = document.createElement('div');
	text.classList.add('arrows__text', 'text');
	text.innerHTML = isMobile
				  ? `// use swipe to play`
				  : `
					// use keyboard <br>
					// arrows to play
			  	  `;
	container.appendChild(text);

	if (!isMobile) {
		const arrows = document.createElement('div');
		arrows.classList.add('arrows__inner');
		arrows.innerHTML = `
			<img src="assets/img/up-arrow.svg" alt="arrow" class="arrows__arrow arrows__arrow_top">
			<img src="assets/img/left-arrow.svg" alt="arrow" class="arrows__arrow arrows__arrow_left">
			<img src="assets/img/bot-arrow.svg" alt="arrow" class="arrows__arrow arrows__arrow_bot">
			<img src="assets/img/right-arrow.svg" alt="arrow" class="arrows__arrow arrows__arrow_right">
		`
		container.appendChild(arrows);
	}
}

export default createArrows;