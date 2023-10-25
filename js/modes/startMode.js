function startMode() {
	const container = document.querySelector('.game');
	const btn = document.createElement('button');

	btn.classList.add('btn-start', 'active');
	btn.textContent = 'start-game';

	btn.addEventListener('click', () => {
		btn.classList.remove('active');
		setTimeout(() => {
			btn.remove();
		}, 300);
	});

	container.appendChild(btn);
	return btn;
}

export default startMode;