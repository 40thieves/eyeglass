import React, { Component, PropTypes } from 'react'

export default class Breadcrumb extends Component {

	render() {
		return (
			<a href={this.props.url}>{this.props.name}</a>
		)
	}

}

Breadcrumb.PropTypes = {
	name: PropTypes.string.isRequired,
	url: PropTypes.string,
	image: PropTypes.string
}
