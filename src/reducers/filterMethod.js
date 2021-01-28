const filterMethodReducer = (state = [], action) => {
    switch(action.type) {
        case "FILTER_SONGS" :
            if(action.checked) {
                return [...state, action.payload];
            };

            const newState = state.filter((item) => {
                return item !== action.payload;
            });

            return newState;
        default :
            return state;    
    };
};

export default filterMethodReducer;