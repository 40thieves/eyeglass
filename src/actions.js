import api from './api'

export const REQUEST_ARTICLE = 'REQUEST_ARTICLE'
export function requestArticle() {
	return {
		type: REQUEST_ARTICLE
	}
}

export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE'
export function receiveArticle(payload) {
	let data = processHeader(payload);

	return {
		type: RECEIVE_ARTICLE,
		payload: data
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

function processHeader(payload) {
	let data = payload.nodes

	let documentMeta = data.document
	let publicationInfo = data.publication_info

	// Pull author nodes out using author ids array
	let authors = documentMeta.authors.map(function(id) {
		return data[id]
	})

	return {
		 publishDate: new Date(publicationInfo.published_on),
		 title: documentMeta.title,
		 authors: authors,
		 doi: publicationInfo.doi
	}
}
