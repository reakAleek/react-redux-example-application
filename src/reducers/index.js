import dishes from './dishes';
import menus from './menus';
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    menus,
    dishes
})

export default rootReducer;