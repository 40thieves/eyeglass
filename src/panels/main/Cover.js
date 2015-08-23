import React, { Component, PropTypes } from 'react'
import moment from 'moment'

import Breadcrumb from './Breadcrumb'
import Author from './Author'

export default class Cover extends Component {

	render() {
		return (
			<header>
				<div className="cover__breadcrumbs">
					{this.props.breadcrumbs.map((crumb) => <Breadcrumb key={crumb.name} { ...crumb } /> )}
				</div>

				<time dateTime={this.props.publishDate.toISOString()} className="cover__published-on">{this.formatDate(this.props.date)}</time>

				<h1 className="cover__title">{this.props.title}</h1>

				<div className="cover__authors">
					{this.props.authors.map((author) => <Author key={author.id} { ...author } /> )}
				</div>

				<p className="cover__doi">DOI: <a href={`http://dx.doi.org/${this.props.doi}`}>{this.props.doi}</a></p>
			</header>
		);
	}

	formatDate(date) {
		const DATE_FORMAT = 'ddd, D MMM YYYY'
		return moment(date).format(DATE_FORMAT);
	}

}

Cover.propTypes = {
	publishDate: PropTypes.instanceOf(Date).isRequired,
	title: PropTypes.string.isRequired,
	authors: PropTypes.arrayOf(PropTypes.object),
	doi: PropTypes.string.isRequired
}