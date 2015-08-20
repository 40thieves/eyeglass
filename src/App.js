import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Router, Route, Redirect } from 'react-router'
import { history } from 'react-router/lib/BrowserHistory'
import { reduxRouteComponent } from 'redux-react-router'

import store from './store'

import { fetchArticle } from './actions'
import { MainPanel } from './panels/main'
import ErrorMessage from './ErrorMessage'

@connect(state => state, { fetchArticle })
class Container extends Component {

	componentWillMount() {
		this.props.fetchArticle()
	}

	render() {
		const { article } = this.props

		let error;
		if (article.error) error = this.renderError(article.error);

		return (
			<main className="app">
				{error}
				<MainPanel { ...article } />
			</main>
		)
	}

	renderError(error) {
		return (
			<ErrorMessage { ...error } />
		)
	}

}

export default class App extends Component {

	render() {
		return (
			<Router history={history}>
				<Route component={reduxRouteComponent(store)}>
					<Route path="/" component={Container} />
				</Route>
			</Router>
		)
	}

}
