var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('lalify.css');
(document.head||document.documentElement).appendChild(style);

var laliImg = chrome.extension.getURL('lali.png');
document.body.innerHTML += '<div id="lali"><img src="'+ laliImg +'"></div>';

var random = Math.floor(Math.random()*10)+1;
console.log(random);
if (random > 1) {
	document.getElementById("lali").style.display = 'none';
}