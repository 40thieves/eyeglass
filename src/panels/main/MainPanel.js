import React, { Component, PropTypes } from 'react'

import Header from './Header'
import Loading from './Loading'

export default class MainPanel extends Component {

	render() {
		const { loading, article } = this.props;

		if (loading || ! article) {
			return renderLoading();
		}
		else {
			return renderArticle.call(this);
		}
	}

	function renderArticle() {
		return (
			<Header {...this.props.article} />
		)
	}

	function renderLoading() {
		return (
			<Loading />
		)
	}

}