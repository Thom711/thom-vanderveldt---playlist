const sortingMethodReducer = (state = 'none', action) => {
    switch(action.type) {
        case "SORT_SONGS" :
            return  state = action.payload;
        default :
            return state;    
    };
};

export default sortingMethodReducer;

/*
    Each sorting method has a unique name. Which is set to state.
    Playlist.js retrieves the sorting method and sorts accordingly.
*/