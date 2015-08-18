import React, { Component, PropTypes } from 'react'

export default class ErrorMessage extends Component {

	render() {
		const { message } = this.props

		return (
			<div>
				<p><strong style={{ color: 'red' }}>There was an error:</strong></p>
				<p>{ message }</p>
			</div>
		)
	}

}