const songsReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_SONG" :
            return  [...state, action.payload];
        case "DELETE_SONG" :
            const newState = state.filter((song) => {
                return song.id !== action.payload;
            });

            return newState;
        default :
            return state;    
    };
};

export default songsReducer;