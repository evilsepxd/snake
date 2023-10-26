function resetFood(foodCont) {
	foodCont.forEach(food => {
		food.classList.remove('eaten');
	});
}

export default resetFood;