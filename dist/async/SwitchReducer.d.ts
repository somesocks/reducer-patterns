/**
* ```javascript
* ```
* @param {...function} reducers - all reducers.
* @returns {function}
* @memberof reducer-patterns.async
*/
declare function SwitchReducer(...reducers: any[]): (state: any, action: any) => Promise<any>;
export = SwitchReducer;
