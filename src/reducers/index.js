import { combineReducers } from 'redux';
import songsReducer from './songs';
import sortingMethodReducer from './sortingMethod';
import filterMethodReducer from './filterMethod';
import incrementIdReducer from './incrementIdReducer'

const allReducers = combineReducers({
    songs: songsReducer,
    sortingMethod: sortingMethodReducer,
    filter: filterMethodReducer,
    incrementID: incrementIdReducer,
});

export default allReducers;