import upArrowSrc from '../../assets/img/up-arrow.svg';
import leftArrowSrc from '../../assets/img/left-arrow.svg';
import botArrowSrc from '../../assets/img/bot-arrow.svg';
import rightArrowSrc from '../../assets/img/right-arrow.svg';

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
			<img src="${upArrowSrc}" alt="arrow" class="arrows__arrow arrows__arrow_top">
			<img src="${leftArrowSrc}" alt="arrow" class="arrows__arrow arrows__arrow_left">
			<img src="${botArrowSrc}" alt="arrow" class="arrows__arrow arrows__arrow_bot">
			<img src="${rightArrowSrc}" alt="arrow" class="arrows__arrow arrows__arrow_right">
		`
		container.appendChild(arrows);
	}
}

export default createArrows;