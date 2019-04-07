
/**
* ```javascript
* ```
* PostprocessState
* @param {function} reducer - the reducer to wrap around.
* @param {function} postprocessor - the postprocessor function to call after the reducer.
* @returns {function}
* @memberof reducer-patterns
*/
function PostprocessState(reducer, postprocessor) {
	return function _postprocessStateInstance(state, action) {
		const newState = reducer(state, action);
		return postprocessor(newState, state);
	};
}

module.exports = PostprocessState;
