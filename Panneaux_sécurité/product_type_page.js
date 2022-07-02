var slideShow = document.getElementById("slideshow");
var productSection = document.getElementById("product-section");

if( window.outerWidth <= 1080 &&  window.outerWidth >= 960) {
	productSection.style.gridTemplateRows = "repeat(1, 200px)";
	productSection.style.gridTemplateColumns ="repeat(3, 200px)";

}


if( window.outerWidth <= 600 &&  window.outerWidth >= 400) {
	
	productSection.style.gridTemplateRows = "repeat(2, 200px)";
	productSection.style.gridTemplateColumns ="repeat(3, 200px)";
	slideShow.style.height = "50vh";
	
}


var btn = document.getElementsByClassName('cta');

function restart_ani() {
	document.getElementById("slide-imgs").style.animationPlayState = "running";
	document.getElementById("radio-1").style.animationPlayState = "running";
	 document.getElementById("radio-2").style.animationPlayState = "running";
	 document.getElementById("radio-3").style.animationPlayState = "running";
};
function stop_ani() {
	 document.getElementById("slide-imgs").style.animationPlayState = "paused";
	 document.getElementById("radio-1").style.animationPlayState = "paused";
	 document.getElementById("radio-2").style.animationPlayState = "paused";
	 document.getElementById("radio-3").style.animationPlayState = "paused";
	 setTimeout(restart_ani, 3000); 
}

for (var i = 0 ; i < btn.length; i++) {
   btn[i].addEventListener('mouseover', stop_ani)
};