import React, { Component, PropTypes } from 'react'

import ParagraphText from './ParagraphText'

export default class Paragraph extends Component {

	render() {
		return (
			<div className="paragraph">
				{ this.props.content.map(content => <ParagraphText key={content.id} { ...content } />) }
			</div>
		)
	}

}

//Paragraph.PropTypes = {
//	content: PropTypes.string.isRequired
//}
