let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
let imgButton = document.querySelector('.img-button');

/*
0 = 'light-theme';
1 = 'dark-theme';

themeButton.onclick = function(){
	a = a + 1
}

if (a = 1) {
	page.classList.toggle("dark-theme")
} else {page.classList.toggle('light-theme')
}

if (a = 2) {
	a = 0
}

console.log('a');
*/
themeButton.onclick = function() {
	page.classList.toggle('light-theme');
	page.classList.toggle('dark-theme');
}

/*
function Complete()
{
	var v1 = document.n1.value1.value;
	var v2 = document.n1.value2.value;
	document.getElementByid('val1').innerHTML = v2
	alert(v1)
}
*/