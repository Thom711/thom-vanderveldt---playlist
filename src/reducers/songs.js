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

/*
    State is an array of songs. Each song is a seperate object.
    Add song simply adds the new song at the end of the array.

    Delete song filters over all the songs and leaves out the song with the given ID.
*/