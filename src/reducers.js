import { REQUEST_ARTICLE, RECEIVE_ARTICLE, REQUEST_ARTICLE_ERROR } from './actions';

export { routerStateReducer as router } from 'redux-react-router'

const INITIAL_ARTICLE_STATE = {
	loading: false,
	error: null
};

export function article(state = INITIAL_ARTICLE_STATE, action) {
	switch (action.type) {
		case REQUEST_ARTICLE:
			return {
				loading: true,
				article: {}
			}

		case RECEIVE_ARTICLE:
			return {
				loading: false,
				article: action.payload
			}

		case REQUEST_ARTICLE_ERROR:
			return {
				loading: false,
				error: action.error
			}

		default:
			return state;
	}
}
