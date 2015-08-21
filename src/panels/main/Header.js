import React, { Component, PropTypes } from 'react'
import moment from 'moment'

import Author from './Author'

export default class Header extends Component {

	render() {
		return (
			<div>
				<p>{this.formatDate(this.props.date)}</p>
				<p>{this.props.title}</p>
				<p>{this.props.authors.map((author, key) => <Author key={author.id} { ...author } /> )}</p>
			</div>
		);
	}

	formatDate(date) {
		const DATE_FORMAT = 'ddd, D MMM YYYY'
		return moment(date).format(DATE_FORMAT);
	}

}

Header.propTypes = {
	date: PropTypes.instanceOf(Date).isRequired,
	title: PropTypes.string.isRequired,
	authors: PropTypes.arrayOf(PropTypes.object)
}