import React, { Component, PropTypes } from 'react'

export default class Header extends Component {

	render() {
		return (
			<div>
				<p>Date: {this.props.date}</p>
				<p>Title: {this.props.title}</p>
				<p>Authors: {this.props.authors.map((author) => author)}</p>
			</div>
		);
	}

}