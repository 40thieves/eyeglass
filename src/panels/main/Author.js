import React, { Component, PropTypes } from 'react'

export default class Author extends Component {

	render() {
		return (
			<a href="#">{this.props.name}</a>
		)
	}

}

Author.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number
}
