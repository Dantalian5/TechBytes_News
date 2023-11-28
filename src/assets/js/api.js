export function url(item, id) {
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
export async function getApiData(url) {
	const headers = new Headers({
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
	});
	try {
		let response = await fetch(url, {
			mode: "cors",
			method: "GET",
			headers: headers,
		});
		if (response.ok) {
			let data = await response.json();
			return data;
		} else {
			throw new Error(response.status);
		}
	} catch (err) {
		return {
			title: "Ups, something went wrong :(",
			by: "--",
			url: "--",
			time: "--",
			error: true,
		};
	}
}
