
window.onscroll = function(){scrollFunction()};


function scrollFunction() {
	nav_items = document.getElementsByClassName("nav_items")

	if(window.outerWidth <= 1080 && window.outerWidth > 960) {
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			// Scroll Down Condtion
			document.getElementById("logo").style.height = "64px";
			document.getElementById("logo").style.width = "64px";
			for (var i = 0 ; i < nav_items.length; i++) {
					nav_items[i].style.fontSize = "18px"
				};
			document.querySelector("header").style.position = "fixed";
			document.querySelector("header").style.background = "#111010";
		} 

		else {
			// Scroll up condition
			document.getElementById("logo").style.height = "80px";
			document.getElementById("logo").style.width = "80px";		 
				document.querySelector("header").style.boxShadow = "none"
			for (var i = 0 ; i < nav_items.length; i++) {
				nav_items[i].style.fontSize = "20px"
			};
			document.querySelector("header").style.background = "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(247,229,228,0) 100%)"; 

		}
	}

	if(window.outerWidth > 1080) {
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			// Scroll Down Condtion
			document.getElementById("logo").style.height = "64px";
			document.getElementById("logo").style.width = "64px";
			for (var i = 0 ; i < nav_items.length; i++) {
					nav_items[i].style.fontSize = "18px"
				};
			document.querySelector("header").style.position = "fixed";
			document.querySelector("header").style.background = "#111010";
		} 

		else {
			// Scroll up condition
			document.getElementById("logo").style.height = "80px";
			document.getElementById("logo").style.width = "80px";		 
				document.querySelector("header").style.boxShadow = "none"
			for (var i = 0 ; i < nav_items.length; i++) {
				nav_items[i].style.fontSize = "24px"
			};
			document.querySelector("header").style.background = "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(247,229,228,0) 100%)"; 

		}
	}
	if(window.outerWidth <= 960) {
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			// Scroll Down Condtion
			document.getElementById("logo").style.height = "32px";
			document.getElementById("logo").style.width = "32px";
			document.querySelector("header").style.position = "fixed";
		} 

		else {
			// Scroll up condition
			document.getElementById("logo").style.height = "48px";
			document.getElementById("logo").style.width = "48px";		 
			document.querySelector("header").style.position = "static";
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
   
	document.querySelectorAll(".css").forEach(e => {
		e.removeAttribute('disabled')
	})
	

}
window.addEventListener("load", Loading_off)

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
