export async function getApiData(url) {
	const headers = new Headers({
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
	});
	let response = await fetch(url, {
		mode: "cors",
		method: "GET",
		headers: headers,
	});
	let data = await response.json();
	return await data;
}
