export function cardCreator() {
	const card = document.createElement("div");
	card.classList.add("card", "card--line-bottom", "loading");
	return card;
}
export function cardUpdater(card, title, author, url, time, type) {
	title =
		title != undefined
			? title
			: "Sorry, there's a problem with the service, please try later :(";
	author = author != undefined ? author : ":(";
	url = url != undefined ? url : ":(";
	const date = new Date(time * 1000).toLocaleDateString("en-US", {
		weekday: "short",
		year: "2-digit",
		month: "2-digit",
		day: "2-digit",
		hourCycle: "h24",
		hour: "numeric",
		minute: "numeric",
	});
	time = date != undefined ? date : "";
	type = type != undefined ? type : "short";

	const cardTitle = document.createElement("a");
	cardTitle.classList.add("card__head", "f-heading", "f-heading--M");
	cardTitle.textContent = title;
	cardTitle.href = url;

	const cardAuthor = document.createElement("p");
	cardAuthor.classList.add("card__text", "f-body", "f-body--M");
	cardAuthor.textContent = "by";
	const cardAuthorName = document.createElement("span");
	cardAuthorName.classList.add("card__accent");
	cardAuthorName.textContent = author;
	cardAuthor.appendChild(cardAuthorName);

	const cardUrl = document.createElement("p");
	cardUrl.classList.add("card__text", "f-body", "f-body--M");
	cardUrl.textContent = "link:";
	const cardUrlLink = document.createElement("a");
	cardUrlLink.classList.add("card__accent");
	cardUrlLink.textContent = url;
	cardUrlLink.href = url;
	cardUrl.appendChild(cardUrlLink);

	const cardTime = document.createElement("p");
	cardTime.classList.add("card__text", "f-body", "f-body--S");
	cardTime.textContent = "date:";
	const cardTimeDate = document.createElement("span");
	cardTimeDate.textContent = time;
	cardTime.appendChild(cardTimeDate);

	card.classList.remove("loading");
	card.appendChild(cardTitle);
	card.appendChild(cardAuthor);
	if (type === "long") {
		card.appendChild(cardUrl);
		card.appendChild(cardTime);
	} else {
		card.classList.remove("card--line-bottom");
		card.classList.add("card--line-top");
	}
}
