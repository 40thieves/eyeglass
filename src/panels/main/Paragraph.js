import React, { Component, PropTypes } from 'react'

export default class Paragraph extends Component {

	render() {
		return (
			<p>{this.props.content}</p>
		)
	}

}

