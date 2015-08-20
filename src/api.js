export default async (fakeError) => {
	if (fakeError) throw new Error('Error thrown')

	return fakeResponse()
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
