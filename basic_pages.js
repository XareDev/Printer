window.onscroll = function() {scrollFunction()};

nav_items = document.getElementsByClassName("nav_items")

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  	// Scroll Down Condtion
    if(window.outerWidth <= 960) {
    	document.getElementById("logo").style.height = "48px";
	    document.getElementById("logo").style.width = "48px";
			}


 		else if(window.outerWidth > 960) {
 			document.getElementById("logo").style.height = "64px";
	  	document.getElementById("logo").style.width = "64px";
	  	for (var i = 0 ; i < nav_items.length; i++) {
	   			nav_items[i].style.fontSize = "18px"
	   		};
 		}

 		 document.querySelector("header").style.position = "fixed";
		  document.querySelector("header").style.background = "#111010";

  } 

  else {
  	// Scroll up condition
    if(window.outerWidth <= 960) {
    	document.getElementById("logo").style.height = "48px";
	    document.getElementById("logo").style.width = "48px";
			}

		else {
		  document.getElementById("logo").style.height = "80px";
		  document.getElementById("logo").style.width = "80px";
		  document.querySelector("header").style.background = "#111010";
		  for (var i = 0 ; i < nav_items.length; i++) {
		 	nav_items[i].style.fontSize = "24px"
			};
		}

		 document.querySelector("header").style.position = "static";

  }
}

function Loading_off(){
	var loader = document.getElementById("loading");
	loader.style.display ="none";
   document.querySelector("body").style.overflow = "visible"
   
	document.querySelectorAll(".css").forEach(e => {
		e.removeAttribute('disabled');
	})

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

const nav = document.querySelector("nav")
const hamMenu = document.querySelector(".mobile-nav-toggle")

hamMenu.addEventListener('click', () => {
	visible = nav.getAttribute("data-visible")
	expended = hamMenu.getAttribute("data-expanded")

	if (visible === "false") {
		nav.setAttribute("data-visible", "true")
		hamMenu.setAttribute("data-expanded", "true")
	} else if (visible === "true"){
		nav.setAttribute("data-visible", "false")
		hamMenu.setAttribute("data-expanded", "false")
	}
})