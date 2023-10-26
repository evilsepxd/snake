import imgFoodSrc from '../../assets/img/food.svg';

function createFood(num) {
	const food = [];
	const container = document.querySelector('.food__inner');
	for (let i = 0; i < num; i++) {
		const img = document.createElement('img');
		img.classList.add('food__img');
		img.src = imgFoodSrc;
		img.alt = 'food';

		container.appendChild(img);

		food.push(img);
	}
	return food;
}

export default createFood;