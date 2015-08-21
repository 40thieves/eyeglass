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

		return (
			<main className="app">
				{ article.error ? <ErrorMessage { ...article.error } /> : <MainPanel { ...article } /> }
			</main>
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
