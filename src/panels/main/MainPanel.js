import React, { Component, PropTypes } from 'react'

import Cover from './Cover'
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
				<Cover { ...article } />
				<article className="article__content">
					{ article.text.map((text) => this.renderText(text)) }
				</article>
			</article>
		);
	}

	renderText(text) {
		switch (text.type) {
			case 'heading':
				return <Heading key={text.id} { ...text } />

			case 'paragraph':
				return <Paragraph key={text.id} { ...text } />
		}
	}
}