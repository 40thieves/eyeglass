export default class Processor {

	constructor(data) {
		this.data = data;
		this.metadata = this.filterMetadata();
	}

	filterMetadata() {
		let metaTypes = ['link', 'strong', 'emphasis', 'superscript'];

		// Filter nodes to find nodes with metadata types
		return Object.values(this.data.nodes).filter((node) => node.type && metaTypes.indexOf(node.type) !== -1)
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

	processParagraph(paragraph, allNodes) {
		let textIds = paragraph.children

		let textNodes = textIds.map((textId) => ({
			id: allNodes[textId].id,
			text: allNodes[textId].content,
			metadata: this.getMetadataForNode(textId)
		}))

		if ( ! textNodes.length) throw new Error('Text node not found')

		return {
			id: paragraph.id,
			type: paragraph.type,
			content: textNodes
		}
	}

	getMetadataForNode(parentId) {
		let metadata = this.metadata
			.filter(meta => {
				return meta.path[0] == parentId
			})

		return metadata.length ? metadata : null
	}

}

