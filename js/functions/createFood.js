function createFood(num) {
	const food = [];
	const container = document.querySelector('.food__inner');
	for (let i = 0; i < num; i++) {
		const img = document.createElement('img');
		img.classList.add('food__img');
		img.src = 'assets/img/food.svg';
		img.alt = 'food';

		container.appendChild(img);

		food.push(img);
	}
	return food;
}

export default createFood;