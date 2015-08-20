export default async (fakeError) => {
	if (fakeError) throw new Error('Error thrown')

	//return fakeResponse()
	return serverResponse()
}

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
				date: 'A Date',
				title: 'A Title',
				authors: ['Alice', 'Bob']
			})
		}, 500)
	});
}
