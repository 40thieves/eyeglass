import React, { Component, PropTypes } from 'react'

export default class Paragraph extends Component {

	render() {
		return (
			<div className="paragraph">
				{ this.props.content.map((content) => <p key={content.id}>{content.text}</p>) }
			</div>
		)
	}

}

Paragraph.PropTypes = {
	content: PropTypes.string.isRequired
}
