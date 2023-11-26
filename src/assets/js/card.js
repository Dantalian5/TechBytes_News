export class CardCreator {
	constructor(title, author, url, time, type) {
		this.title = title != undefined ? title : "Load Error";
		this.author = author != undefined ? author : "Jhon Doe?";
		this.url = url != undefined ? url : "sorry, missing url :(";
		const date = new Date(time * 1000).toLocaleDateString("en-US", {
			weekday: "short",
			year: "2-digit",
			month: "2-digit",
			day: "2-digit",
			hourCycle: "h24",
			hour: "numeric",
			minute: "numeric",
		});
		this.time = date != undefined ? date : "--/--/--";
		this.type = type != undefined ? type : "short";
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
		if (this.type === "long") {
			card.appendChild(cardUrl);
			card.appendChild(cardTime);
		}

		return card;
	}
}
