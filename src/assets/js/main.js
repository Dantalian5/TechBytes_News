"use strict";
import {CardCreator} from "./card";
import {getApiData} from "./api";
const hamburgerMenu = document.getElementById("js-navmenu__btn");
const themeSwitch = document.getElementById("js-themeInput");
const topGrid = document.getElementById("js-topStories");
const newsGrid = document.getElementById("js-newsGrid");

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
function url(item, id) {
	let url = item
		? new URL(
				`v0/item/${id}.json?print=pretty`,
				"https://hacker-news.firebaseio.com"
		  )
		: new URL(
				`v0/${id}.json?print=pretty`,
				"https://hacker-news.firebaseio.com"
		  );
	return url;
}
function createCard(parent, title, author, dataurl, time, type) {
	parent.appendChild(
		new CardCreator(title, author, dataurl, time, type).render()
	);
}
function getList(list) {
	return getApiData(url(false, list));
}
async function getItems(list, start, cant, parent, type) {
	let data = await getList(list);
	for (let i = start; i < start + cant; i++) {
		getApiData(url(true, data[i])).then((item) => {
			console.log(item.url);
			createCard(parent, item.title, item.by, item.url, item.time, type);
		});
	}
}

getItems("topstories", 0, 3, topGrid, "short");
getItems("newstories", 0, 10, newsGrid, "long");
