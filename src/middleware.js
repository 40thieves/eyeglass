import thunk from 'redux-thunk'

function log() {
	return next => action => {
		console.debug('ACTION', action)
		next(action)
	}
}

export default [
	// log,
	thunk
]