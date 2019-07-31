
/**
* ```javascript
* ```
* InitState accepts an initializer function/value,
* and builds an initial state if none exists
* @param {function} initializer - a condition task.
* @returns {taskFunction}
* @memberof reducer-patterns.async
*/
function InitState(initializer) {
	return async function _initStateInstance(state, action) {
		return state == null ? await initializer(action) : state;
	};
}

export = InitState;
