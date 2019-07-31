"use strict";
/**
* ```javascript
* ```
* SeriesReducer accepts any  number of reducers,
* and builds a new reducer that chains them together in series
* @param {...function} reducers - all reducers.
* @returns {function}
* @memberof reducer-patterns
*/
function SeriesReducer() {
    var reducers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        reducers[_i] = arguments[_i];
    }
    return function _seriesReducerInstance(state, action) {
        var newState = state;
        for (var i = 0; i < reducers.length; i++) {
            newState = reducers[i](newState, action);
        }
        return newState;
    };
}
module.exports = SeriesReducer;
