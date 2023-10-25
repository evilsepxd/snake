import getRandomInt from "../functions/getRandomInt";

class Food {
	constructor(initX, initY, context, canvasWidth, canvasHeight) {
		this.x = initX;
		this.y = initY;
		this.radius = 6;
		this.ctx = context;
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;

		this.spawnLimit = 50;
	}

	
	setNewFood() {
		this.x = getRandomInt(this.spawnLimit, this.canvasWidth - this.spawnLimit);
		this.y = getRandomInt(this.spawnLimit, this.canvasHeight - this.spawnLimit);
	}

	draw() {
		// arc(x, y, radius, startAngle, endAngle, anticlockwise)

		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2, true);
		this.ctx.fillStyle = 'rgba(67, 217, 173, .1)';
		this.ctx.fill();

		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2, true);
		this.ctx.fillStyle = 'rgba(67, 217, 173, .2)';
		this.ctx.fill();

		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
		this.ctx.fillStyle = 'rgb(67, 217, 173)';
		this.ctx.fill();
	}
}

export default Food;