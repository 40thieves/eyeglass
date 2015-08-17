import { REQUEST_ARTICLE, RECEIVE_ARTICLE } from './actions';

export { routerStateReducer as router } from 'redux-react-router'

const INITIAL_ARTICLE_STATE = {
	loading: false
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

		default:
			return state;
	}
}
