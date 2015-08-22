export default class Processor {

	constructor(data) {
		this.data = data;
	}

	process() {
		return Object.assign({},
			this.processHeader(),
			this.processText()
		)
	}

	processHeader() {
		let nodes = this.data.nodes

		let documentMeta = nodes.document
		let publicationInfo = nodes.publication_info

		// Pull author nodes out using author ids array
		let authors = documentMeta.authors.map((id) =>  nodes[id])

		return {
			publishDate: new Date(publicationInfo.published_on),
			title: documentMeta.title,
			authors: authors,
			doi: publicationInfo.doi
		}
	}

	processText() {
		let nodes = this.data.nodes

		let text = nodes.content.nodes
			.filter((nodeId) => nodeId !== 'cover') // Filter out cover node - handled by processHeader()
			.map((nodeId) => nodes[nodeId]) // Pull text nodes out using content node ids array
			.map((node) => {
				let content

				if (node.type === 'paragraph') {
					let textId = node.children[0]
					let textNode = nodes[textId]

					if ( ! textNode) throw new Error('Text node not found')

					content = textNode.content
				}
				else if (node.type === 'heading') {
					if ( ! node.content) throw new Error('Header content not found')

					content = node.content
				}
				else {
					throw new Error('Unknown node type')
				}

				return {
					type: node.type,
					content: content
				}
			});

		return { text }
	}
}

