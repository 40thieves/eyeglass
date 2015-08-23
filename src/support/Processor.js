export default class Processor {

	constructor(data) {
		this.data = data;
	}

	process() {
		return Object.assign({},
			this.processCover(),
			this.processText()
		)
	}

	processCover() {
		let nodes = this.data.nodes

		let breadcrumbs = nodes.cover.breadcrumbs

		let documentMeta = nodes.document
		let publicationInfo = nodes.publication_info

		// Pull author nodes out using author ids array
		let authors = documentMeta.authors.map((id) =>  nodes[id])

		return {
			breadcrumbs: breadcrumbs,
			publishDate: new Date(publicationInfo.published_on),
			title: documentMeta.title,
			authors: authors,
			doi: publicationInfo.doi
		}
	}

	processText() {
		let nodes = this.data.nodes

		let text = nodes.content.nodes
			.filter((nodeId) => nodeId !== 'cover') // Filter out cover node - handled by processCover()
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
			id: heading.id,
			type: heading.type,
			level: heading.level,
			content: heading.content
		}
	}

	processParagraph(paragraph, textNodes) {
		let textId = paragraph.children[0]
		let textNode = textNodes[textId]

		if ( ! textNode) throw new Error('Text node not found')

		return {
			id: paragraph.id,
			type: paragraph.type,
			content: textNode.content
		}
	}
}

