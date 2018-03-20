
import {
    ADD_DISH,
    REMOVE_DISH,
    UNDO_DISHES,
    REDO_DISHES,
    UPDATE_DISH
} from './ActionTypes';

export const removeDish = (id) => ({ 
    type: REMOVE_DISH,
    id: id
});

export const updateDish = (id, dish) => ({
    type: UPDATE_DISH,
    id: id,
    dish: dish
});

export const addDish = (dish) => ({
    type: ADD_DISH,
    dish: dish
});

export const undoDishes = () => ({
     type: UNDO_DISHES
    });

export const redoDishes = () => ({ 
    type: REDO_DISHES
})
