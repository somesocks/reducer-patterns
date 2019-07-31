/**
* ```javascript
* ```
* InitState accepts an initializer function/value,
* and builds an initial state if none exists
* @param {function} initializer - a condition task.
* @returns {taskFunction}
* @memberof reducer-patterns.async
*/
declare function InitState(initializer: any): (state: any, action: any) => Promise<any>;
export = InitState;
