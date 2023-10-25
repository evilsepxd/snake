class Snake {
	constructor(initX, initY, context) {
		this.ctx = context;

		this.speed = 1;
		this.dir = 'top';
		this.x = initX;
		this.y = initY;
		this.vx = 0;
		this.vy = -this.speed;

		this.radius = 6;
		this.tailLength = 150;
		this.tailIncrease = 20;
		this.points = [
			{
				x: this.x,
				y: this.y
			},
			{
				x: this.x,
				y: this.y + Math.floor(this.tailLength / 3)
			},
			{
				x: this.x + Math.floor(this.tailLength / 3),
				y: this.y + Math.floor(this.tailLength / 3)
			},
			{
				x: this.x + Math.floor(this.tailLength / 3),
				y: this.y + Math.floor(this.tailLength * 2 / 3)
			}
		]
	}


	increazeSize() {
		this.tailLength += this.tailIncrease;
		switch (this.dir) {
			case 'top':
				this.x = this.x;
				this.y = this.y - this.tailIncrease;
				break;
			case 'bot':
				this.x = this.x;
				this.y = this.y + this.tailIncrease;
				break;
			case 'left':
				this.x = this.x - this.tailIncrease;
				this.y = this.y;
				break;
			case 'right':
				this.x = this.x + this.tailIncrease;
				this.y = this.y;
				break;
		}
	}


	addPoint() {
		this.points.unshift({ x: this.x, y: this.y });
	}


	isCollisedWithFood(foodX, foodY, foodRadius) {
		const distance = Math.sqrt(Math.pow(this.x - foodX, 2) + Math.pow(this.y - foodY, 2));
		if (distance <= (this.radius + foodRadius)) {
			return true;
		} return false;
	}


	draw() {				// рисуем сначала голову змейки (полукруг), затем линию до каждой точки поворота
		this.ctx.lineWidth = this.radius * 2;
		this.ctx.lineJoin = 'round';
		this.ctx.lineCap = 'round';

		this.ctx.beginPath();
		this.ctx.moveTo(this.x, this.y);

		this.points.forEach((point, i) => {
			if (i < this.points.length - 1) {
				const gradient = this.ctx.createLinearGradient(
					point.x,
					point.y,
					this.points[i + 1].x,
					this.points[i + 1].y
				);
				gradient.addColorStop(0, `rgba(67, 217, 173, 1)`);
				gradient.addColorStop(1, `rgba(67, 217, 173, 0)`);
		
				this.ctx.strokeStyle = gradient;
			}

			this.ctx.lineTo(point.x, point.y);
			this.ctx.stroke();
		});
	}


	changeDirection(dir) {
		switch(dir) {
			case 'top':
				if (this.dir === 'left' || this.dir === 'right') {
					this.addPoint();
				}
				this.dir = 'top';
				this.vx = 0;
				this.vy = -this.speed;
				break;
			case 'bot':
				if (this.dir === 'left' || this.dir === 'right') {
					this.addPoint();
				}
				this.dir = 'bot';
				this.vx = 0;
				this.vy = this.speed;
				break;
			case 'left':
				if (this.dir === 'top' || this.dir === 'bot') {
					this.addPoint();
				}
				this.dir = 'left';
				this.vx = -this.speed;
				this.vy = 0;
				break;
			case 'right':
				if (this.dir === 'top' || this.dir === 'bot') {
					this.addPoint();
				}
				this.dir = 'right';
				this.vx = this.speed;
				this.vy = 0;
				break;
		}
	}


	// изменяем положение головы змейки,
	// перебираем каждый элемент хвоста
	move() {
		this.x += this.vx;
		this.y += this.vy;

		this.points[0].x = this.x;
		this.points[0].y = this.y;

		// двигаем последнюю точку в стороону первой, пока она её не достигнет,
		// после чего удаляем её и последней становится предпоследняя

		if (this.points.length > 1) {
			const lastPoint = this.points[this.points.length - 1];
			const preLastPoint = this.points[this.points.length - 2];
			const lastPointDistanceX = preLastPoint.x - lastPoint.x;
			const lastPointDistanceY = preLastPoint.y - lastPoint.y;

			if (lastPointDistanceX > 0) {
				lastPoint.x += this.speed;
			} else if (lastPointDistanceX < 0) {
				lastPoint.x -= this.speed;
			} else if (lastPointDistanceX === 0 && lastPointDistanceY === 0) {
				this.points.pop();
			}

			if (lastPointDistanceY > 0) {
				lastPoint.y += this.speed;
			} else if (lastPointDistanceY < 0) {
				lastPoint.y -= this.speed;
			}
		}
	}
}

export default Snake;