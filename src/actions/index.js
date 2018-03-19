import {
    ADD_MENU,
    FETCH_MENUS_SUCCESS
} from './ActionTypes';

import * as MenuService from '../services/MenuService';

export const addMenu = () => ({
    type: ADD_MENU
});


export const fetchMenusSuccess = (menus) => ({ type: FETCH_MENUS_SUCCESS, menus: menus })
export const fetchMenus = () => {
    return (dispatch) => {
        MenuService.getMenus().subscribe(
            (next) => { dispatch(fetchMenusSuccess(next)) },
            (error) => { throw(error) }
        )
    }
}
