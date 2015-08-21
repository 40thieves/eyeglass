export default async (fakeError) => {
	if (fakeError) throw new Error('Error thrown')

	return fakeResponse()
	//return serverResponse()
}

// Just a quick local server that I have set up (it's entirely unrelated to eyeglass, too lazy to set up a proper server)
const url = (endpoint) => `http://ib.api` + endpoint

async function serverResponse(endpoint) {
	let raw = await fetch(url(`/inspections/3`), { headers: { 'X-Api-Key': 'yqeY9Rfl3jcXOfbtytLj3MqT1' } })
	return await raw.json()
}

// Faking out server response
function fakeResponse() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				date: new Date,
				title: 'A Title',
				authors: [
					{ id: 1, name: 'Alice' },
					{ id: 2, name: 'Bob'}
				]
			})
		}, 500)
	});
}
