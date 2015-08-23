import React, { Component, PropTypes } from 'react'

export default class Breadcrumb extends Component {

	render() {
		let {name, url, image} = this.props

		return (
			<a href={url}>
				{ image ? <img src={image} title={name} /> : {name} }
			</a>
		)
	}

}

Breadcrumb.PropTypes = {
	name: PropTypes.string.isRequired,
	url: PropTypes.string,
	image: PropTypes.string
}
