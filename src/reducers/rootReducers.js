import { combineReducers } from 'redux';
import reducer from './reducer';
import themeReducer from './themeReducer';

const rootReducers = combineReducers({
    reducer,
    themeReducer
});

export default rootReducers;
