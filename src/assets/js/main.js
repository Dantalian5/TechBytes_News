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
	constructor(title, description, author, url) {
		this.title = title;
		this.description = description;
		this.author = author;
		this.url = url;
	}
	render() {
		const card = document.createElement("div");
		card.classList.add("card", "card--line-bottom");

		const cardTitle = document.createElement("h3");
		cardTitle.classList.add("card__head", "f-heading", "f-heading--M");
		cardTitle.textContent = this.title;

		const cardResume = document.createElement("p");
		cardResume.classList.add("card__text", "f-body", "f-body--L");
		cardResume.textContent = this.description;

		const cardAuthor = document.createElement("p");
		cardAuthor.classList.add("card__text", "f-body", "f-body--M");
		cardAuthor.textContent = "by";
		const cardAuthorName = document.createElement("span");
		cardAuthorName.classList.add("card__accent", "card__author");
		cardAuthorName.textContent = this.author;
		cardAuthor.appendChild(cardAuthorName);

		const cardUrl = document.createElement("p");
		cardUrl.classList.add("card__text", "f-body", "f-body--M");
		cardUrl.textContent = "by";
		const cardUrlLink = document.createElement("span");
		cardUrlLink.classList.add("card__accent");
		cardUrlLink.textContent = this.url;
		cardUrl.appendChild(cardUrlLink);

		card.appendChild(cardTitle);
		card.appendChild(cardResume);
		card.appendChild(cardAuthor);
		card.appendChild(cardUrl);

		return card;
	}
}

fetch("./user.json")
	.then((response) => {
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		return response.json();
	})
	.then((data) => console.log(data))
	.catch((error) => {
		console.error(`Could not get products: ${error}`);
	});

let title = "Este es el titulo";
let description = "esta es la descripcion 1";
let author = "Author Name";
let url = "https://www.example.com/news/this";
newsGrid.appendChild(new CardCreator(title, description, author, url).render());
