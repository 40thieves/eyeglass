export default async (fakeError) => {
	if (fakeError) throw new Error('Error thrown')

	//return fakeResponse()
	return serverResponse()
}

// Just a quick local server that I have set up (it's entirely unrelated to eyeglass, too lazy to set up a proper server)
const url = (endpoint) => `http://ib.api` + endpoint

async function serverResponse(endpoint) {
	let raw = await fetch(`/article-short.json`, { headers: { 'X-Api-Key': 'yqeY9Rfl3jcXOfbtytLj3MqT1' } })
	return await raw.json()
}

// Faking out server response
function fakeResponse() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				date: new Date,
				title: 'Science hackathons for developing interdisciplinary research and collaborations',
				doi: '10.7554/eLife.09944',
				authors: [
					{ id: 1, name: 'Derek Groen' },
					{ id: 2, name: 'Ben Calderhead' }
				]
			})
		}, 500)
	});
}
