const initialState = {
    "items" : []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_VIDEOS':
            return {items: action.payload};

        default: return state;
    }

   
}

export default reducer;
