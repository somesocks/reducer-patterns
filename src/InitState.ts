
/**
* ```javascript
* ```
* InitState accepts an initializer function/value,
* and builds an initial state if none exists
* @param {function} initializer - a condition task.
* @returns {taskFunction}
* @memberof reducer-patterns
*/
function InitState(initializer) {
	return function _initStateInstance(state, action) {
		return state == null ? initializer(action) : state;
	};
}

export = InitState;
