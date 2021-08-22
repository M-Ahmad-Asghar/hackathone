import {combineReducers} from 'redux';
import reducer from '../store/reducers/Reducer'
import AuthReducer from './reducers/AuthReducer';

const rootReducer = combineReducers({
    reducer
})

export default rootReducer;