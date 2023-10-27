function isMaxWidth() {
	return window.matchMedia('(max-width: 576px)').matches;
}

export default isMaxWidth;