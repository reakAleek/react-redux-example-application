import { 
    ADD_DISH, 
    REMOVE_DISH, 
    UPDATE_DISH_NAME,
    UPDATE_DISH_PRICE,
    UNDO_DISHES,
    REDO_DISHES,
    UPDATE_DISH_ADDITIONAL_INFO
} from '../actions/ActionTypes';
import undoable from './undoable';
const _ = require('lodash');

var dishId = 0;

const initialState = {
    byId: {
        [dishId]: { id: dishId,
            name: '',
            price: '',
            addInfo: ''
        }
    },
    allIds: [dishId++]
}

const dishesReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_DISH:
            return  {
                byId: { 
                    ...state.byId,
                    [dishId]: { 
                        id: dishId,
                        name: '',
                        price: '',
                        addInfo: '',
                    }
                },
                allIds: [...state.allIds, dishId++]
            };

        case REMOVE_DISH:
            return {
                byId: _.omit(state.byId, action.id),
                allIds: state.allIds.filter(id => id !== action.id)
            };

        case UPDATE_DISH_NAME:
            if (action.name !== state.byId[action.id].name) {
                return updatedDish(state, action.id, { name: action.name });
            }
            return state;

        case UPDATE_DISH_PRICE:
            if (action.price !== state.byId[action.id].price) {
                return updatedDish(state, action.id, { price: action.price })
            }
            return state;
        case UPDATE_DISH_ADDITIONAL_INFO:
            return updatedDish(state, action.id, { addInfo: action.addInfo })
        default:
            return state;
    }
};

const updatedDish = (state, id, obj) => {
    return {
        ...state,
        byId: {
            ...state.byId,
            [id]: Object.assign({}, state.byId[id], obj)
        }
    };
};

export default undoable(dishesReducer, UNDO_DISHES, REDO_DISHES);