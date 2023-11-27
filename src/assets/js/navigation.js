export function setNavigation(cant, index) {
	const newsNav = document.getElementById("js-newsNav");
	let navItems = [];
	let navItemsMax = Math.ceil(cant / 10);
	while (newsNav.firstChild) {
		newsNav.removeChild(newsNav.firstChild);
	}

	navItems[0] = document.createElement("span");
	navItems[0].classList.add("news-navigation__item");
	navItems[0].textContent = 1;
	navItems[4] = document.createElement("span");
	navItems[4].classList.add("news-navigation__item");
	navItems[4].textContent = navItemsMax;
	navItems[1] = document.createElement("span");
	navItems[2] = document.createElement("span");
	navItems[3] = document.createElement("span");

	if (index === 0) {
		navItems[1].classList.add("news-navigation__item");
		navItems[1].textContent = index + 2;
		navItems[2].classList.add("news-navigation__item");
		navItems[2].textContent = index + 3;
		navItems[3].textContent = "...";
		navItems[0].classList.add("selected");
	} else if (index === 1) {
		navItems[1].classList.add("news-navigation__item");
		navItems[1].textContent = index + 1;
		navItems[2].classList.add("news-navigation__item");
		navItems[2].textContent = index + 2;
		navItems[3].textContent = "...";
		navItems[1].classList.add("selected");
	} else if (index > 1 && index < navItemsMax - 2) {
		navItems[1].textContent = "...";
		navItems[2].classList.add("news-navigation__item");
		navItems[2].textContent = index + 1;
		navItems[3].textContent = "...";
		navItems[2].classList.add("selected");
	} else if (index === navItemsMax - 3) {
		navItems[1].textContent = "...";
		navItems[2].classList.add("news-navigation__item");
		navItems[2].textContent = index + 1;
		navItems[3].classList.add("news-navigation__item");
		navItems[3].textContent = index + 2;
		navItems[2].classList.add("selected");
	} else if (index === navItemsMax - 2) {
		navItems[1].textContent = "...";
		navItems[2].classList.add("news-navigation__item");
		navItems[2].textContent = index;
		navItems[3].classList.add("news-navigation__item");
		navItems[3].textContent = index + 1;
		navItems[3].classList.add("selected");
	} else if (index === navItemsMax - 1) {
		navItems[1].textContent = "...";
		navItems[2].classList.add("news-navigation__item");
		navItems[2].textContent = index - 1;
		navItems[3].classList.add("news-navigation__item");
		navItems[3].textContent = index;
		navItems[4].classList.add("selected");
	}

	for (let i = 0; i < 5; i++) {
		newsNav.appendChild(navItems[i]);
	}
}
