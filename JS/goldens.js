const navbar = document.querySelectorAll('.navbar');

for (let menu of navbar) {
	menu.addEventListener('mouseover', onHover);
	menu.addEventListener('mouseout', mouseout);
	function onHover() {
		menu.style.background = '#3ec1d3';
	}
	function mouseout() {
		menu.style.background = '';
	}
}
