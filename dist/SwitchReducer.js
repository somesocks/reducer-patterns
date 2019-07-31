"use strict";
function defaultReducer(state, action) {
    return state;
}
/**
* ```javascript
* ```
* @param {...function} reducers - all reducers.
* @returns {function}
* @memberof reducer-patterns
*/
function SwitchReducer() {
    var reducers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        reducers[_i] = arguments[_i];
    }
    var table = {
        default: defaultReducer,
    };
    for (var i = 0; i < reducers.length; i++) {
        var reducer = reducers[i];
        var type = reducer.type || reducer.TYPE;
        if (type) {
            table[type] = reducer;
        }
    }
    return function _SwitchReducerInstance(state, action) {
        var type = action.type;
        var reducer = table[type] || table.default;
        return reducer(state, action);
    };
}
module.exports = SwitchReducer;
