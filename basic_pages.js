window.onscroll = function() {scrollFunction()};

nav_items = document.getElementsByClassName("nav_items")

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  	// Scroll Down Condtion
    if(window.outerWidth <= 960) {
    	document.getElementById("logo").style.height = "48px";
	    document.getElementById("logo").style.width = "48px";
	    for (var i = 0 ; i < nav_items.length; i++) {
		   	nav_items[i].style.fontSize = "16px"
			};
			}


 		else if(window.outerWidth > 960) {
 			document.getElementById("logo").style.height = "64px";
	  	document.getElementById("logo").style.width = "64px";
	  	for (var i = 0 ; i < nav_items.length; i++) {
	   			nav_items[i].style.fontSize = "18px"
	   		};
 		}

 		 document.getElementById("header").style.position = "fixed";

  } 

  else {
  	// Scroll up condition
    if(window.outerWidth <= 960) {
    	document.getElementById("logo").style.height = "48px";
	    document.getElementById("logo").style.width = "48px";
	    for (var i = 0 ; i < nav_items.length; i++) {
		   	nav_items[i].style.fontSize = "22px"
				};
			}

		else {
		  document.getElementById("logo").style.height = "80px";
		  document.getElementById("logo").style.width = "80px";
		  for (var i = 0 ; i < nav_items.length; i++) {
		 	nav_items[i].style.fontSize = "24px"
			};
		}

  }
}

function Loading_off(){
	var loader = document.getElementById("loading");
	loader.style.display ="none";
   document.querySelector("body").style.overflow = "visible"
}

window.addEventListener("load", Loading_off);

if( window.outerWidth <= 1080 &&  window.outerWidth >= 960) {
	for (var i = 0 ; i < nav_items.length; i++) {
		   	nav_items[i].style.fontSize = "22px"
			};
			}

if( window.outerWidth <= 600 &&  window.outerWidth >= 400) {
	document.querySelector("#phone-number-header h2").style.fontSize = "22px"
	 for (var i = 0 ; i < nav_items.length; i++) {
		   	nav_items[i].style.fontSize = "22px"
			};
}