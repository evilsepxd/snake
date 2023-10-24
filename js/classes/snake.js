class Snake {
	constructor(initX, initY, context) {
		this.ctx = context;

		this.speed = .1;
		this.dir = 'bot';
		this.x = initX;
		this.y = initY;
		this.vx = 0;
		this.vy = -this.speed;
		this.motion = false;

		this.radius = 6;
		this.tailLength = 18;
		this.initTurns = [];		// повороты змейки при инициализации игры
		for (let i = 1; i < 3; i++) { // 2 поворота (змейка делится на 3 части)
			this.initTurns.push(Math.floor(this.tailLength * i / 3));
		}

		this.tail = [				// первая часть хвоста
			{
				x: this.x - this.radius,
				y: this.y
			}
		];

		for (let i = 1; i < this.tailLength; i++) {		// заполняем хвост
			this.tail.push({
				x: this.tail[i - 1].x + (i >= this.initTurns[0] && i < this.initTurns[1] ? this.radius * 2 : 0),
				y: this.tail[i - 1].y + (i < this.initTurns[0] || i >= this.initTurns[1] ? this.radius * 2 : 0)
			});
		}

	}

	draw() {				// рисуем сначала голову змейки (полукруг), затем перебираем хвост
		this.ctx.beginPath();
		switch(this.dir) {
			case 'top':
				this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI, true);
			case 'bot':
				this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI, true);
			case 'left':
				this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI, true);
			case 'right':
				this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI, true);
		}
		this.ctx.fillStyle = 'rgb(67, 217, 173)';
		this.ctx.fill();

		this.tail.forEach((cell, i) => {
			this.ctx.fillStyle = `rgba(67, 217, 173, ${(this.tail.length - i) * (1 / this.tail.length)})`;
			this.ctx.fillRect(cell.x, cell.y, this.radius * 2, this.radius * 2);
		});
	}

	changeDirection(dir) {
		switch(dir) {
			case 'top':
				this.dir = 'top';
				this.vx = 0;
				this.vy = -this.speed;
			case 'bot':
				this.dir = 'bot';
				this.vx = 0;
				this.vy = this.speed;
			case 'left':
				this.dir = 'left';
				this.vx = -this.speed;
				this.vy = 0;
			case 'right':
				this.dir = 'right';
				this.vx = this.speed;
				this.vy = 0;
		}
	}


	// изменяем положение головы змейки,
	// перебираем каждый элемент хвоста
	move() {
		this.x += this.vx;
		this.y += this.vy;

		this.tail.forEach((cell, i) => {
			cell.x += this.vx;
			cell.y += this.vy;
		});
	}
}

export default Snake;