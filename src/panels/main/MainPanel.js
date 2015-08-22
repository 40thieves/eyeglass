import React, { Component, PropTypes } from 'react'

import Header from './Header'
import Loading from './Loading'
import Heading from './Heading'
import Paragraph from './Paragraph'

export default class MainPanel extends Component {

	render() {
		const { loading, article } = this.props;

		return (
			(loading || ! article) ?  <Loading /> : this.renderArticle(article)
		)
	}

	renderArticle(article) {
		return (
			<article className="article__wrapper">
				<Header { ...article } />
				<article className="article__content">
					{ article.text.map((text) => this.renderText(text)) }
				</article>
			</article>
		);
	}

	renderText(text) {
		switch (text.type) {
			case 'heading':
				return <Heading { ...text } />

			case 'paragraph':
				return <Paragraph { ...text } />
		}
	}
}