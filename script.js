window.onscroll = function() {scrollFunction()};

nav_items = document.getElementsByClassName("nav_items")

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {


 		

    if(window.innerWidth < 960) {
    	document.getElementById("logo").style.height = "48px";
    	document.getElementById("logo").style.width = "48px";
    	for (var i = 0 ; i < nav_items.length; i++) {
   			nav_items[i].style.fontSize = "12px"
   		};
 		}
 		else {
 			document.getElementById("logo").style.height = "64px";
	  	document.getElementById("logo").style.width = "64px";
	  	for (var i = 0 ; i < nav_items.length; i++) {
	   			nav_items[i].style.fontSize = "18px"
	   		};
 		}

    document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.background = "#111010";
  } 

  else {

    if(window.innerWidth < 960) {
    	document.getElementById("logo").style.height = "48px";
		    document.getElementById("logo").style.width = "48px";
		    document.getElementById("header").style.background = "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(247,229,228,0) 100%)"; 

		    for (var i = 0 ; i < nav_items.length; i++) {
		   	nav_items[i].style.fontSize = "14px"
				};
			}

		else {
		  document.getElementById("logo").style.height = "80px";
		  document.getElementById("logo").style.width = "80px";
		  document.getElementById("header").style.background = "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(247,229,228,0) 100%)"; 

		  for (var i = 0 ; i < nav_items.length; i++) {
		 	nav_items[i].style.fontSize = "24px"
			};
		}

  }
}

var cover = document.getElementsByClassName("imgs")

for (var i = cover.length - 1; i >= 0; i--) {
	cover[i].style.width = "" + window.innerWidth +"px"
}

function Loading_off(){
	var loader = document.getElementById("loading");
	loader.style.display ="none";
   document.querySelector("body").style.overflow = "visible"
}

window.addEventListener("load", Loading_off)


