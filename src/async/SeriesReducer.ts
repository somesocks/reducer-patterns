
/**
* ```javascript
* ```
* SeriesReducer accepts any  number of reducers,
* and builds a new reducer that chains them together in series
* @param {...function} reducers - all reducers.
* @returns {function}
* @memberof reducer-patterns.async
*/
function SeriesReducer(...reducers) {
	return async function _seriesReducerInstance(state, action) {
		let newState = state;

		for (let i = 0; i < reducers.length; i++) {
			newState = await reducers[i](newState, action);
		}

		return newState;
	};
}

export = SeriesReducer;
