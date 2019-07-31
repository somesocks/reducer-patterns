/**
* ```javascript
* ```
* @param {...function} reducers - all reducers.
* @returns {function}
* @memberof reducer-patterns
*/
declare function SwitchReducer(...reducers: any[]): (state: any, action: any) => any;
export = SwitchReducer;
