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

		// faking out server response
		return new Promise((resolve, reject) => {
			if (fail) reject({ message: 'foo' })

			setTimeout(() => {
				resolve({
					date: 'date',
					title: 'title',
					authors: ['Alice', 'Bob']
				})
			}, 2000)
		})
		.then(payload => {
			dispatch(receiveArticle(payload))
		})
		.catch(error => {
			dispatch(requestArticleError(error))
		})
	}
}
