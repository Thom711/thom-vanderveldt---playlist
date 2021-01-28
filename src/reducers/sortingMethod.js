const sortingMethodReducer = (state = 'none', action) => {
    switch(action.type) {
        case "SORT_SONGS" :
            return  state = action.payload;
        default :
            return state;    
    };
};

export default sortingMethodReducer;