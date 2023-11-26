"use strict";
const hamburgerMenu = document.getElementById("js-navmenu__btn");
const themeSwitch = document.getElementById("js-themeInput");
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
class CardCreator {
	constructor(title, author, url, time) {
		this.title = title;
		this.author = author;
		this.url = url;
		const date = new Date(time * 1000).toLocaleDateString("en-US", {
			weekday: "short",
			year: "2-digit",
			month: "2-digit",
			day: "2-digit",
			hourCycle: "h24",
			hour: "numeric",
			minute: "numeric",
		});
		this.time = date;
	}
	render() {
		const card = document.createElement("div");
		card.classList.add("card", "card--line-bottom");

		const cardTitle = document.createElement("a");
		cardTitle.classList.add("card__head", "f-heading", "f-heading--M");
		cardTitle.textContent = this.title;
		cardTitle.href = this.url;

		const cardAuthor = document.createElement("p");
		cardAuthor.classList.add("card__text", "f-body", "f-body--M");
		cardAuthor.textContent = "by";
		const cardAuthorName = document.createElement("span");
		cardAuthorName.classList.add("card__accent");
		cardAuthorName.textContent = this.author;
		cardAuthor.appendChild(cardAuthorName);

		const cardUrl = document.createElement("p");
		cardUrl.classList.add("card__text", "f-body", "f-body--M");
		cardUrl.textContent = "link:";
		const cardUrlLink = document.createElement("a");
		cardUrlLink.classList.add("card__accent");
		cardUrlLink.textContent = this.url;
		cardUrlLink.href = this.url;
		cardUrl.appendChild(cardUrlLink);

		const cardTime = document.createElement("p");
		cardTime.classList.add("card__text", "f-body", "f-body--S");
		cardTime.textContent = "date:";
		const cardTimeDate = document.createElement("span");
		cardTimeDate.textContent = this.time;
		cardTime.appendChild(cardTimeDate);

		card.appendChild(cardTitle);
		card.appendChild(cardAuthor);
		card.appendChild(cardUrl);
		card.appendChild(cardTime);

		return card;
	}
}

function url(id) {
	let url = new URL(
		`v0/${id}.json?print=pretty`,
		"https://hacker-news.firebaseio.com"
	);
	return url;
}

let headers = new Headers({
	"Content-Type": "application/json",
	"Access-Control-Allow-Origin": "*",
});
fetch(url("newstories"), {
	mode: "cors",
	method: "GET",
	headers: headers,
})
	.then((response) => {
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		return response.json();
	})
	.then((data) => {
		getItems(data);
	})
	.catch((error) => {
		console.error(`Could not get products: ${error}`);
	});
async function getItems(data) {
	for (let i = 0; i < 10; i++) {
		const response = await fetch(url(`item/${data[i]}`), {
			mode: "cors",
			method: "GET",
			headers: headers,
		});
		const item = await response.json();
		createCard(item.title, item.by, item.url, item.time);
	}
}
function createCard(title, author, dataurl, time) {
	newsGrid.appendChild(new CardCreator(title, author, dataurl, time).render());
}
