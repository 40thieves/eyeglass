export default class Processor {

	constructor(data) {
		this.data = data;
	}

	process() {
		return Object.assign({},
			this.processHeader()
		)
	}

	processHeader() {
		let nodes = this.data.nodes

		let documentMeta = nodes.document
		let publicationInfo = nodes.publication_info

		// Pull author nodes out using author ids array
		let authors = documentMeta.authors.map(function(id) {
			return nodes[id]
		})

		return {
			publishDate: new Date(publicationInfo.published_on),
			title: documentMeta.title,
			authors: authors,
			doi: publicationInfo.doi
		}
	}

}
