/* eslint-env node */

const ConditionalReducer = require('./ConditionalReducer');

let state = {
	a: 1,
	b: 2,
};

let action1 = {
	type: 'a',
	payload: 2,
};

let action2 = {
	type: 'b',
	payload: 2,
};

let reducer = ConditionalReducer(
	(state, action) => action.type === 'a',
	(state, action) => ({
		...state,
		a: action.payload,
	})
);

// prints action1 result { a: 2, b: 2 }
// action1 triggers a state update, since it has the correct type
console.log(
	'action1 result',
	reducer(state, action1)
);

// prints action2 result { a: 1, b: 2 }
// action2 is ignored, since it has the wrong type
console.log(
	'action2 result',
	reducer(state, action2)
);
