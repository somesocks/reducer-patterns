
async function defaultCondition(state, action) {
	return true;
}

async function defaultAction(state, action) {
	return state;
}

/**
* ```javascript
*  let ConditionalReducer = require('reducer-patterns/async/ConditionalReducer');
*
*  let state = {
*    a: 1,
*    b: 2,
*  };
*
*  let action1 = {
*    type: 'a',
*    payload: 2,
*  };
*
*  let action2 = {
*    type: 'b',
*    payload: 2,
*  };
*
*  let reducer = ConditionalReducer(
*    (state, action) => action.type === 'a',
*    (state, action) => ({
*      ...state,
*      a: action.payload,
*    })
*  );
*
*
*  // prints action1 result { a: 2, b: 2 }
*  // action1 triggers a state update, since it has the correct type
*  console.log(
*    'action1 result',
*    reducer(state, action1)
*  );
*
*  // prints action2 result { a: 1, b: 2 }
*  // action2 is ignored, since it has the wrong type
*  console.log(
*    'action2 result',
*    reducer(state, action2)
*  );
*
* ```
* ConditionalReducer
* @param {function} condition - a condition task.
* @param {function} onTrue - reducer to run if true.
* @param {function} onFalse - reducer to run if false.
* @returns {function}
* @memberof reducer-patterns.async
*/
function ConditionalReducer(
	condition = defaultCondition,
	onTrue = defaultAction,
	onFalse = defaultAction
) {
	return async function _conditionalReducerInstance(state, action) {
		return await condition(state, action) ? await onTrue(state, action) : await onFalse(state, action);
	};
}

export = ConditionalReducer;
