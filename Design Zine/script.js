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
	 setTimeout(restart_ani, 2000); 
}

for (var i = 0 ; i < btn.length; i++) {
   btn[i].addEventListener('mouseover', stop_ani)
};

window.onscroll = function() {scrollFunction()};

nav_items = document.getElementsByClassName("nav_items")

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("logo").style.height = "64px";
    document.getElementById("logo").style.width = "64px";

    for (var i = 0 ; i < nav_items.length; i++) {
   	nav_items[i].style.fontSize = "18px"
	};

    document.getElementById("header").style.position = "fixed";
  } 
  else {
    document.getElementById("logo").style.height = "80px";
    document.getElementById("logo").style.width = "80px";
    document.getElementById("header").style.position = "";

    for (var i = 0 ; i < nav_items.length; i++) {
   	nav_items[i].style.fontSize = "24px"
	};

  }
}