// IMPORT THE REDUCERS HERE

import { combineReducers } from 'redux';
import songsReducer from './songs';


// ADD REDUCERS TO THIS FUNCTION LIKE THIS: counter : counterReducer
const allReducers = combineReducers({
    songs: songsReducer
});

export default allReducers;


// EXAMPLE OF A REDUCER
// const counterReducer = (state = 0, action) => {
//     switch(action.type) {
//         case "INCREMENT":
//             return state + action.payload;
//         case "DECREMENT":
//             return state - action.payload;
//         default:
//             return state;
//     };
// };

// export default counterReducer;