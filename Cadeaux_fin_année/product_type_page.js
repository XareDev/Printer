var slideShow = document.getElementById("slideshow");
var productSection = document.getElementById("product-section");

if( window.outerWidth <= 1080 &&  window.outerWidth >= 960) {
	productSection.style.gridTemplateRows = "repeat(4, 200px)";
	productSection.style.gridTemplateColumns ="repeat(4, 200px)";

}

var btn = document.getElementsByClassName('cta');

function restart_ani() {
	document.getElementById("slide-imgs").style.animationPlayState = "running";
	document.getElementById("radio-1").style.animationPlayState = "running";
	 document.getElementById("radio-2").style.animationPlayState = "running";
	 document.getElementById("radio-3").style.animationPlayState = "running";
	 document.getElementById("radio-4").style.animationPlayState = "running";
	 document.getElementById("radio-5").style.animationPlayState = "running";
	 document.getElementById("radio-6").style.animationPlayState = "running";
	 document.getElementById("radio-7").style.animationPlayState = "running";
	 document.getElementById("radio-8").style.animationPlayState = "running";
	 document.getElementById("radio-9").style.animationPlayState = "running";
	 document.getElementById("radio-10").style.animationPlayState = "running";
	 document.getElementById("radio-11").style.animationPlayState = "running";
	 document.getElementById("radio-12").style.animationPlayState = "running";
	 document.getElementById("radio-13").style.animationPlayState = "running";
	 document.getElementById("radio-14").style.animationPlayState = "running";
	 document.getElementById("radio-15").style.animationPlayState = "running";
};
function stop_ani() {
	 document.getElementById("slide-imgs").style.animationPlayState = "paused";
	 document.getElementById("radio-1").style.animationPlayState = "paused";
	 document.getElementById("radio-2").style.animationPlayState = "paused";
	 document.getElementById("radio-3").style.animationPlayState = "paused";
	 document.getElementById("radio-4").style.animationPlayState = "paused";
	 document.getElementById("radio-5").style.animationPlayState = "paused";
	 document.getElementById("radio-6").style.animationPlayState = "paused";
	 document.getElementById("radio-7").style.animationPlayState = "paused";
	 document.getElementById("radio-8").style.animationPlayState = "paused";
	 document.getElementById("radio-9").style.animationPlayState = "paused";
	 document.getElementById("radio-10").style.animationPlayState = "paused";
	 document.getElementById("radio-11").style.animationPlayState = "paused";
	 document.getElementById("radio-12").style.animationPlayState = "paused";
	 document.getElementById("radio-13").style.animationPlayState = "paused";
	 document.getElementById("radio-14").style.animationPlayState = "paused";
	 document.getElementById("radio-15").style.animationPlayState = "paused";
	 setTimeout(restart_ani, 3000); 
}

for (var i = 0 ; i < btn.length; i++) {
   btn[i].addEventListener('mouseover', stop_ani)
};