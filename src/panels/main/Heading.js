import React, { Component, PropTypes } from 'react'

export default class Heading extends Component {

	render() {
		return (
			<h2>{this.props.content}</h2>
		)
	}

}

