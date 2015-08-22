import api from './api'
import Processor from './support/Processor'

export const REQUEST_ARTICLE = 'REQUEST_ARTICLE'
export function requestArticle() {
	return {
		type: REQUEST_ARTICLE
	}
}

export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE'
export function receiveArticle(payload) {
	return {
		type: RECEIVE_ARTICLE,
		payload: (new Processor(payload)).process()
	}
}

export const REQUEST_ARTICLE_ERROR = 'REQUEST_ARTICLE_ERROR'
export function requestArticleError(error) {
	return {
		type: REQUEST_ARTICLE_ERROR,
		error: error
	}
}

export function fetchArticle(fail) {
	return dispatch => {
		dispatch(requestArticle())

		return api(fail)
		.then(payload => {
			dispatch(receiveArticle(payload))
		})
		.catch(error => {
			dispatch(requestArticleError(error))
		})
	}
}
