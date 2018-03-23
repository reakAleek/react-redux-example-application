import { 
    ADD_DISH, 
    REMOVE_DISH, 
    UNDO_DISHES,
    REDO_DISHES,
    UPDATE_DISH
} from '../actions/ActionTypes';
import undoable from './undoable';
const _ = require('lodash');

const initialState = {
    byId: {
        [0]: {
            id: 0,
            name: 'Wiener Schnitzel',
            price: '8.50',
            addInfo: 'Mit Pommes oder Kartoffelsalat.',
            veggie: false,
            hot: 0
        }
    },
    allIds: [0],
    nextId: 1
}

const dishesReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_DISH:
            return  {
                byId: { 
                    ...state.byId,
                    [state.nextId]: { 
                        id: state.nextId,
                        name: '',
                        price: '',
                        addInfo: '',
                        veggie: false,
                        hot: 0
                    }
                },
                allIds: [...state.allIds, state.nextId],
                nextId: state.nextId + 1
            };

        case REMOVE_DISH:
            return {
                ...state,
                byId: _.omit(state.byId, action.id),
                allIds: _.without(state.allIds, action.id)
            };
        
        case UPDATE_DISH:
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.id]: _.assign({}, state.byId[action.id], action.dish)
                }
            }

        default:
            return state;
    }
};

export default undoable(dishesReducer, UNDO_DISHES, REDO_DISHES);