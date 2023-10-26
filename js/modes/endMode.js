function endMode(win) {
	const container = document.querySelector('.game__field');
	const btn = document.createElement('button');
	const banner = document.createElement('div');

	btn.classList.add('btn-end', 'active');
	btn.textContent = 'start-again';

	banner.classList.add('banner-end', 'active');
	banner.textContent = win ? 'WELL DONE!' : 'GAME OVER!';

	btn.addEventListener('click', () => {
		setTimeout(() => {
			btn.classList.remove('active');
			banner.classList.remove('active');
			setTimeout(() => {
				btn.remove();
				banner.remove();
			}, 300);
		}, 500);
	});

	container.appendChild(banner);
	container.appendChild(btn);
	return btn;
}

export default endMode;