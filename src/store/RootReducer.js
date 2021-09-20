import {combineReducers} from 'redux';
import reducer from '../store/reducers/Reducer'
import AuthReducer from './reducers/AuthReducer';
import foodReducer from './reducers/FoodReducer';
const rootReducer = combineReducers({
    reducer, foodReducer, AuthReducer
})

export default rootReducer;