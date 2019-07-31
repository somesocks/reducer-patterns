
function defaultReducer(state, action) {
	return state;
}

/**
* ```javascript
* ```
* @param {...function} reducers - all reducers.
* @returns {function}
* @memberof reducer-patterns.async
*/
function SwitchReducer(...reducers) {
	const table = {
		default: defaultReducer,
	};

	for (let i = 0; i < reducers.length; i++) {
		const reducer = reducers[i];
		const type = reducer.type || reducer.TYPE;
		if (type) {
			table[type] = reducer;
		}
	}

	return async function _SwitchReducerInstance(state, action) {
		const { type } = action;
		const reducer = table[type] || table.default;
		return await reducer(state, action);
	};
}

export = SwitchReducer;
