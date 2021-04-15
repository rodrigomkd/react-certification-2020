const initialState = {
    "mode" : "light"
};

const themeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_MODE':
            return {mode: action.payload};

        default: return state;
    }  
}

export default themeReducer;
