/**
* ```javascript
* ```
* PostprocessState
* @param {function} reducer - the reducer to wrap around.
* @param {function} postprocessor - the postprocessor function to call after the reducer.
* @returns {function}
* @memberof reducer-patterns
*/
declare function PostprocessState(reducer: any, postprocessor: any): (state: any, action: any) => any;
export = PostprocessState;
