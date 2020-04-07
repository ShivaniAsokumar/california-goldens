const navbar = document.querySelectorAll('.navbar');

for (let menu of navbar) {
	menu.addEventListener('mouseover', onHover);
	menu.addEventListener('mouseout', mouseout);
	function onHover() {
		menu.style.background = '#9FED78';
	}
	function mouseout() {
		menu.style.background = '';
	}
}

const aboutLink = document.querySelectorAll('.about-link');
for (let link of aboutLink) {
	link.addEventListener('mouseover', onHover);
	link.addEventListener('mouseout', mouseout);
	function onHover() {
		link.style.background = '#eef9bf';
	}
	function mouseout() {
		link.style.background = '';
	}
}
