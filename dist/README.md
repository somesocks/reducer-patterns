# reducer-patterns

<a name="reducer-patterns"></a>

## reducer-patterns : <code>object</code>
**Kind**: global namespace  

* [reducer-patterns](#reducer-patterns) : <code>object</code>
    * [.ConditionalReducer(condition, onTrue, onFalse)](#reducer-patterns.ConditionalReducer) ⇒ <code>function</code>
    * [.InitState(initializer)](#reducer-patterns.InitState) ⇒ <code>taskFunction</code>
    * [.PostprocessState(reducer, postprocessor)](#reducer-patterns.PostprocessState) ⇒ <code>function</code>
    * [.SeriesReducer(...reducers)](#reducer-patterns.SeriesReducer) ⇒ <code>function</code>


* * *

<a name="reducer-patterns.ConditionalReducer"></a>

### reducer-patterns.ConditionalReducer(condition, onTrue, onFalse) ⇒ <code>function</code>
```javascript
 let ConditionalReducer = require('reducer-patterns/ConditionalReducer');

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

```
ConditionalReducer

**Kind**: static method of [<code>reducer-patterns</code>](#reducer-patterns)  
**Params**

- condition <code>function</code> - a condition task.
- onTrue <code>function</code> - reducer to run if true.
- onFalse <code>function</code> - reducer to run if false.


* * *

<a name="reducer-patterns.InitState"></a>

### reducer-patterns.InitState(initializer) ⇒ <code>taskFunction</code>
```javascript
```
InitState accepts an initializer function/value,
and builds an initial state if none exists

**Kind**: static method of [<code>reducer-patterns</code>](#reducer-patterns)  
**Params**

- initializer <code>function</code> - a condition task.


* * *

<a name="reducer-patterns.PostprocessState"></a>

### reducer-patterns.PostprocessState(reducer, postprocessor) ⇒ <code>function</code>
```javascript
```
PostprocessState

**Kind**: static method of [<code>reducer-patterns</code>](#reducer-patterns)  
**Params**

- reducer <code>function</code> - the reducer to wrap around.
- postprocessor <code>function</code> - the postprocessor function to call after the reducer.


* * *

<a name="reducer-patterns.SeriesReducer"></a>

### reducer-patterns.SeriesReducer(...reducers) ⇒ <code>function</code>
```javascript
```
SeriesReducer accepts any  number of reducers,
and builds a new reducer that chains them together in series

**Kind**: static method of [<code>reducer-patterns</code>](#reducer-patterns)  
**Params**

- ...reducers <code>function</code> - all reducers.


* * *

