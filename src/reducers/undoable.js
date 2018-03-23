import { UNDO, REDO } from '../actions/ActionTypes';
import _ from 'lodash';
const UNDO_LIMIT = 50;



export default (reducer, undoActionType = UNDO, redoActionType = REDO) => {

    const initialState = {
        present: reducer(undefined, {}),
        past: [],
        future: []
    };

    return (state = initialState, action) => {
        const { past, present, future } = state;
        switch (action.type) {
            case undoActionType:
                return _.isEmpty(past) ? state : {
                    past: _.tail(past),
                    present: past[0] || present,
                    future: [present, ...future]
                };
    
            case redoActionType:
                return _.isEmpty(future) ? state : {
                    past: [present, ...past],
                    present: future[0] || present,
                    future: _.tail(future) 
                };

            default:
                const newPresent = reducer(present, action);
                return (present !== newPresent) ? {
                    past: _.take([present, ...past], UNDO_LIMIT),
                    present: newPresent,
                    future: []
                } : state;
        }
    }
}