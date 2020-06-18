import React, { Component, PropTypes } from 'react'

export default class ParagraphText extends Component {

	render() {
		if (this.props.metadata) {
			let str = this.props.text
			let bar = []

			this.props.metadata.forEach(meta => {
				var [start, end] = meta.range

				let beg = str.slice(0, start)
				let section = str.slice(start, end)
				let fin = str.slice(end, str.length)
			})

			console.log(bar);
			console.log(str);
		}

		return (
			<p>{this.props.text}</p>
		)
	}

}

