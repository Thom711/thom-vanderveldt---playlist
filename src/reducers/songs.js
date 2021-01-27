const songsReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_SONG" :
            return  [...state, action.payload];
        case "DELETE_SONG" :
            console.log('deleting song with id', action.payload)
            return state; 
        default :
            return state;    
    };
};

export default songsReducer;