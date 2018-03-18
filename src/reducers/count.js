
import { 
    INCREMENT,
    DECREMENT
} from '../actions/ActionTypes';
const initalState = 0;

const countReducer = (state = initalState, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + action.amount;
        case DECREMENT:
            return state - action.amount;

        default:
            return state;
    }
}

export default countReducer;