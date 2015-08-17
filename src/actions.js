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
		payload: payload
	}
}

export function fetchArticle() {
	return dispatch => {
		dispatch(requestArticle())

		// faking out server response
		return new Promise(resolve => {
			setTimeout(() => { resolve({
				date: 'date',
				title: 'title',
				authors: ['Alice', 'Bob']
			}) }, 2000)
		})
		.then(payload => {
			dispatch(receiveArticle(payload))
		})
	}
}

export const REQUEST_ARTICLE_ERROR = 'REQUEST_ARTICLE_ERROR'