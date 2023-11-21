const hamburgerMenu = document.getElementById("js-navmenu__btn");

document.addEventListener("click", (event) => {
	// if clicked outside the menu, close the menu, if clicked in the menu, togle
	if (!event.target.closest("#js-navmenu__btn, #js-navmenu__items")) {
		hamburgerMenu.classList.remove("is-active");
	} else if (event.target.closest("#js-navmenu__btn")) {
		hamburgerMenu.classList.toggle("is-active");
	}
});
