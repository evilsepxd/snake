// получить случайное число для генерации еды на поле
function getRandomInt(min, max) {
	return ((Math.random() * (max - min)) + min) >> 0;
}

export default getRandomInt;