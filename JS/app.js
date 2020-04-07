const navbar = document.querySelectorAll('.navbar');

for (let menu of navbar) {
	menu.addEventListener('mouseover', onHover);
	menu.addEventListener('mouseout', mouseout);
	function onHover() {
		menu.style.background = '#4a69bb';
	}
	function mouseout() {
		menu.style.background = '';
	}
}
