"use strict";
import {cardCreator, cardUpdater} from "./card";
import {url, getApiData} from "./api";
import {setNavigation} from "./navigation";
const hamburgerMenu = document.getElementById("js-navmenu__btn");
const themeSwitch = document.getElementById("js-themeInput");
const topGrid = document.getElementById("js-topStories");
const newsGrid = document.getElementById("js-newsGrid");
let index = 0;

function themeSelector(theme) {
	if (theme === "light") {
		document.body.classList.add("theme-light");
		document.body.classList.remove("theme-dark");
		themeSwitch.checked = true;
	}
}
async function getItems(list, start, cant, parent, type, nav = false) {
	let cards = [];
	removeAllChildNodes(parent);
	for (let i = 0; i < cant; i++) {
		cards.push(cardCreator());
		parent.appendChild(cards[i]);
	}
	let data = await getApiData(url(false, list));
	cards.forEach((card, i) => {
		getApiData(url(true, data[i + start * 10])).then((item) => {
			cardUpdater(card, item.title, item.by, item.url, item.time, type);
		});
	});
	if (nav) {
		setNavigation(data.length, start);
	}
}
function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}
//---------------------------------------------------
themeSelector(localStorage.getItem("TBN-theme"));
getItems("topstories", 0, 3, topGrid, "short");
getItems("newstories", index, 10, newsGrid, "long", true);

document.addEventListener("click", (event) => {
	if (event.target.closest(".news-navigation__btn")) {
		if (event.target.textContent === "Prev" && index > 0) {
			index -= 1;
		} else if (event.target.textContent === "Next" && index < 50) {
			index += 1;
		}
		getItems("newstories", index, 10, newsGrid, "long", true);
	} else if (event.target.closest(".news-navigation__item")) {
		index = Number(event.target.textContent) - 1;
		getItems("newstories", index, 10, newsGrid, "long", true);
	}
});
document.addEventListener("click", (event) => {
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
		localStorage.setItem("TBN-theme", "light");
	} else {
		document.body.classList.add("theme-dark");
		document.body.classList.remove("theme-light");
		localStorage.setItem("TBN-theme", "dark");
	}
});
