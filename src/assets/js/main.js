const hamburgerMenu = document.getElementById("js-navmenu__btn");
const themeSwitch = document.getElementById("js-themeInput");

document.addEventListener("click", (event) => {
	// if clicked outside the menu, close the menu, if clicked in the menu, togle
	if (!event.target.closest("#js-navmenu__btn, #js-navmenu__items")) {
		hamburgerMenu.classList.remove("is-active");
	} else if (event.target.closest("#js-navmenu__btn")) {
		hamburgerMenu.classList.toggle("is-active");
	}
});
themeSwitch.addEventListener("change", (event) => {
	if (event.target.checked) {
		document.body.classList.add("theme-light");
		document.body.classList.remove("theme-dark");
	} else {
		document.body.classList.add("theme-dark");
		document.body.classList.remove("theme-light");
	}
});
