import React, { Component, PropTypes } from 'react'

import Header from './Header'
import Loading from './Loading'

export default class MainPanel extends Component {

	render() {
		const { loading, article } = this.props;

		return (
			(loading || ! article) ?  <Loading /> : <Header { ...article } />
		)
	}

}