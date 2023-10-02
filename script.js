//console.log("Hello world!");

// Fetching the elements from the html
let icons = document.querySelectorAll(".footerIcon");
let length = icons.length;

const hoverEffect = (element, index) => {
	let previous = index - 1;
	let next = index + 1;

	// Scale to make bigger then original, translateY to make it go up
	if (previous === -1) {
		element.style.transform = "scale(1.5)  translateY(-10px)";
	} else if (next == icons.length) {
		element.style.transform = "scale(1.5)  translateY(-10px)";
	} else {
		element.style.transform = "scale(1.5)  translateY(-10px)";
		// Targeting the icons before and after the one hovering
		icons[previous].style.transform = "scale(1.2) translateY(-8px)";
		icons[next].style.transform = "scale(1.2) translateY(-8px)";
	}
};

// For each (;)) of the items when mouseover and mouseleave it will get bigger and smaller
icons.forEach((icon, index) => {
	icon.addEventListener("mouseover", (event) => {
		hoverEffect(event.target, index);
	});

	icon.addEventListener("mouseleave", (event) => {
		icons.forEach((icon) => {
			icon.style.transform = "scale(1)  translateY(0px)";
		});
	});
});
