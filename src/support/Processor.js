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
				switch (node.type) {
					case 'paragraph':
						return this.processParagraph(node, nodes)

					case 'heading':
						return this.processHeading(node)

					default:
						throw new Error('Unknown node type')
				}
			});

		return { text }
	}

	processHeading(heading) {
		if ( ! heading.content) throw new Error('Header content not found')

		return {
			type: heading.type,
			content: heading.content
		}
	}

	processParagraph(paragraph, textNodes) {
		let textId = paragraph.children[0]
		let textNode = textNodes[textId]

		if ( ! textNode) throw new Error('Text node not found')

		return {
			type: paragraph.type,
			content: textNode.content
		}
	}
}

