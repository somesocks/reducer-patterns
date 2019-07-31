/**
* ```javascript
* ```
* SeriesReducer accepts any  number of reducers,
* and builds a new reducer that chains them together in series
* @param {...function} reducers - all reducers.
* @returns {function}
* @memberof reducer-patterns
*/
declare function SeriesReducer(...reducers: any[]): (state: any, action: any) => any;
export = SeriesReducer;
