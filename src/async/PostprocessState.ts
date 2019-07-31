
/**
* ```javascript
* ```
* PostprocessState
* @param {function} reducer - the reducer to wrap around.
* @param {function} postprocessor - the postprocessor function to call after the reducer.
* @returns {function}
* @memberof reducer-patterns.async
*/
function PostprocessState(reducer, postprocessor) {
	return async function _postprocessStateInstance(state, action) {
		const newState = await reducer(state, action);
		return await postprocessor(newState, state);
	};
}

export = PostprocessState;
