var slideShow = document.getElementById("slideshow");
var productSection = document.getElementById("product-section");

if( window.outerWidth <= 1080 &&  window.outerWidth >= 960) {
	productSection.style.gridTemplateRows = "repeat(1, 200px)";
	productSection.style.gridTemplateColumns ="repeat(1, 200px)";

}


if( window.outerWidth <= 600 &&  window.outerWidth >= 400) {
	
	productSection.style.gridTemplateRows = "repeat(2, 200px)";
	productSection.style.gridTemplateColumns ="repeat(1, 200px)";
	slideShow.style.height = "50vh";
	
}

