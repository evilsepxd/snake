// получить случайное число для генерации еды на поле
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

export default getRandomInt;