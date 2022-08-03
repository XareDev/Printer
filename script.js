window.onscroll = function() {scrollFunction()};

nav_items = document.getElementsByClassName("nav_items")

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  	// Scroll Down Condtion
    if(window.outerWidth <= 960) {
    	document.getElementById("logo").style.height = "48px";
	    document.getElementById("logo").style.width = "48px";
	    document.getElementById("header").style.background = "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(247,229,228,0) 100%)"; 

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
    document.getElementById("header").style.background = "#111010";
  } 

  else {
  	// Scroll up condition
    if(window.outerWidth <= 960) {
    	document.getElementById("logo").style.height = "48px";
	    document.getElementById("logo").style.width = "48px";
	    document.getElementById("header").style.background = "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(247,229,228,0) 100%)"; 

	    for (var i = 0 ; i < nav_items.length; i++) {
		   	nav_items[i].style.fontSize = "22px"
				};
			}

		else {
		  document.getElementById("logo").style.height = "80px";
		  document.getElementById("logo").style.width = "80px";
		  document.getElementById("header").style.background = "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(247,229,228,0) 100%)"; 
		  document.getElementById("header").style.boxShadow = "none"
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

if( window.outerWidth <= 1080 &&  window.outerWidth >= 960) {
	for (var i = 0 ; i < nav_items.length; i++) {
		   	nav_items[i].style.fontSize = "22px"
			};
	var products_logo = document.querySelectorAll(".products .product-content img");
	var products_line = document.querySelectorAll(".products .product-content hr");
  var products_header = document.querySelectorAll(".products .product-content h2");
  var products_btns = document.querySelectorAll(".products .product-content a button");

	for (var j = products_logo.length - 1; j >= 0; j--) {
		products_logo[j].style.width = "48px";
		products_logo[j].style.height = "48px";
	}

	for (var i = products_header.length - 1; i >= 0; i--) {
		products_header[i].style.fontSize = "18px"

	}

	for (var i = products_line.length - 1; i >= 0; i--) {
		products_line[i].style.height = "1px"
	}

	for (var i = products_btns.length - 1; i >= 0; i--) {
		products_btns[i].style.fontSize = "10px"
		products_btns[i].style.padding = "5px 20px"
	}

}

if( window.outerWidth <= 700 &&  window.outerWidth >= 400) {
	var products_logo = document.querySelectorAll(".products .product-content img");
	var products_line = document.querySelectorAll(".products .product-content hr");
  var products_header = document.querySelectorAll(".products .product-content h2");
  var products_btns = document.querySelectorAll(".products .product-content a button");
  var imgsSections = document.querySelectorAll(".imgs-section")
  document.querySelector("#phone-number-header h2").style.fontSize = "22px"
  for (var i = 0 ; i < nav_items.length; i++) {
		   	nav_items[i].style.fontSize = "22px"
			};
	for (var j = products_logo.length - 1; j >= 0; j--) {
		products_logo[j].style.width = "48px";
		products_logo[j].style.height = "48px";
	}

	for (var i = products_header.length - 1; i >= 0; i--) {
		products_header[i].style.fontSize = "18px"

	}

	for (var i = products_line.length - 1; i >= 0; i--) {
		products_line[i].style.height = "1px"
	}

	for (var i = products_btns.length - 1; i >= 0; i--) {
		products_btns[i].style.fontSize = "10px"
		products_btns[i].style.padding = "5px 20px"
	}

	for (var i = imgsSections.length - 1; i >= 0; i--) {
		imgsSections[i].style.width = "60%"
		imgsSections[i].style.height = "65%"
	}

}
