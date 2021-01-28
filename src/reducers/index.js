import { combineReducers } from 'redux';
import songsReducer from './songs';
import sortingMethodReducer from './sortingMethod';
import filterMethodReducer from './filterMethod';

const allReducers = combineReducers({
    songs: songsReducer,
    sortingMethod: sortingMethodReducer,
    filter: filterMethodReducer
});

export default allReducers;