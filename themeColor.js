if (localStorage.getItem('LStheme') === null){
	changeBlue();
} else {
	document.documentElement.setAttribute('theme', localStorage.getItem('LStheme'));
}

console.log(localStorage.getItem('LStheme'));

function changeLight() {
	localStorage.setItem('LStheme','LIGHT');
  document.documentElement.setAttribute('theme', "LIGHT");
}

function changeBlue() {
	localStorage.setItem('LStheme','BLUE');
  document.documentElement.setAttribute('theme', "BLUE");
}

function changeBlack() {
	localStorage.setItem('LStheme','BLACK');
  document.documentElement.setAttribute('theme', "BLACK");
}