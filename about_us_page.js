text = document.getElementById("about-us-text")
header = document.getElementById("about-container-header")
line = document.getElementById("about-container-header-line")
logo = document.getElementById("about-us-logo")

if( window.outerWidth <= 600 &&  window.outerWidth >= 400) {
	text.style.fontSize = "16px"
	logo.style.width = "208px"
	logo.style.height = "208px"
	line.style.width = "315px"
	header.style.fontSize = "38px"
}
