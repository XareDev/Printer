var click = 1;

var Class = document.querySelectorAll(".gallery");
function filter() {
	if (click == 1) {
		var select = document.querySelector("select")
		var sel = select.options[select.selectedIndex].text;
		
		
		try {
			for (var i = 0; i < Class.length; i++) {
				if (Class[i].classList.contains(sel.replaceAll(" ", "-")) == false) {
					Class[i].style.display = "none"
				}
			};
			var box = document.querySelector("#" + sel.replaceAll(" ", "-"));
			box.style.display = "block";
			select.options[select.selectedIndex].style.display = "none"
		}
		catch(TypeError) {
			alert("Nous n'avons pas encore de phootos de ce produit, Veuillez selectionner un autre produit!")
			for (var i = 0; i < Class.length; i++) {
					Class[i].style.display = "inline-block"

			};
			click = 0;
		}
		
		
		select.selectedIndex = 0;
	}


	else if (click > 1) {
		var select = document.querySelector("select")
		var sel = select.options[select.selectedIndex].text;
		imgs = document.querySelectorAll("." + sel.replaceAll(" ", "-"));
		
		
		try {
			for (var i = 0; i < imgs.length; i++) {
				if (imgs[i].classList.contains(sel.replaceAll(" ", "-"))) {
					imgs[i].style.display = "inline-block"
				}
			};
			box = document.querySelector("#" + sel.replaceAll(" ", "-"));
			box.style.display = "block";

			select.options[select.selectedIndex].style.display = "none"

		}

		catch(TypeError) {
			alert("Nous n'avons pas encore de phootos de ce produit, Veuillez selectionner un autre produit!")
			for (var i = 0; i < imgs.length; i++) {
					imgs[i].style.display = "inline-block"
			};
			click = 0;
		}
		select.selectedIndex = 0;
	}


	click ++;
	console.log(click)
}



function unfilter(name, index) {
	let box_count = 0;
	var select = document.querySelector("select")
	var box = document.querySelector("#" + name);


	for (let i of document.getElementsByClassName("filter-boxes")) {
	    if(i.style.display == "block") {
	    	box_count++;
	    	console.log(box_count)
	    }
	}

	if (box_count == 1) {
		for (var i = 0; i < Class.length; i++) {
			Class[i].style.display = "block"
		};
		box.style.display = "none"
		click = 1;
	} 


	else if (box_count > 1) {
		for (var i = 0; i < Class.length; i++) {
			if (Class[i].classList.contains(name)) {
				Class[i].style.display = "none"
			}
		};
		var box = document.querySelector("#" + name);
		box.style.display = "none";
	}

	select.options[index].style.display = "block"
}

