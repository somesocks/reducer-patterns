declare function defaultCondition(state: any, action: any): Promise<boolean>;
declare function defaultAction(state: any, action: any): Promise<any>;
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
declare function ConditionalReducer(condition?: typeof defaultCondition, onTrue?: typeof defaultAction, onFalse?: typeof defaultAction): (state: any, action: any) => Promise<any>;
export = ConditionalReducer;
