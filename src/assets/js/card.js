export function cardCreator() {
	const card = document.createElement("div");
	card.classList.add("card", "card--line-bottom", "loading");
	return card;
}
export function cardUpdater(error, card, type, ...data) {
	type = type != undefined ? type : "short";
	let title =
		data[0] != undefined
			? data[0]
			: "Sorry, there's a problem with the service, please try later :(";
	let author = data[1] != undefined ? data[1] : ":(";
	let url = data[2] != undefined ? data[2] : "";
	let time = new Date(data[3] * 1000).toLocaleDateString("en-US", {
		weekday: "short",
		year: "2-digit",
		month: "2-digit",
		day: "2-digit",
		hourCycle: "h24",
		hour: "numeric",
		minute: "numeric",
	});

	//card, title, author, url, time, type, error

	const cardTitle = document.createElement("a");
	cardTitle.classList.add("card__head", "f-heading", "f-heading--M");
	cardTitle.textContent = title;
	cardTitle.href = url;
	card.appendChild(cardTitle);

	if (!error) {
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
		card.appendChild(cardAuthor);
		if (type === "long") {
			card.appendChild(cardUrl);
			card.appendChild(cardTime);
		} else {
			card.classList.remove("card--line-bottom");
			card.classList.add("card--line-top");
		}
	} else {
		const cardError = document.createElement("p");
		cardError.classList.add("card__text", "f-body", "f-body--M");
		cardError.textContent = "Please, try again later";
		card.appendChild(cardError);
		card.classList.add("js-cardError");
	}
	card.classList.remove("loading");
}
