import { combineReducers } from 'redux';
import songsReducer from './songs';

const allReducers = combineReducers({
    songs: songsReducer
});

export default allReducers;