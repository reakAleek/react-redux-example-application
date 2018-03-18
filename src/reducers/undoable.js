import { UNDO, REDO } from '../actions/ActionTypes';

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
                return (past.length <= 0) ? state : {
                    past: past.slice(1, past.length),
                    present: past[0] || present,
                    future: [present, ...future]
                };
    
            case redoActionType:
                return (future.length <= 0) ? state : {
                    past: [present, ...past],
                    present: future[0] || present,
                    future: future.slice(1, future.length)  
                };

            default:
                const newPresent = reducer(present, action);
                return (present !== newPresent) ? {
                    past: [present, ...past].slice(0, (UNDO_LIMIT >= 0) ? UNDO_LIMIT : undefined),
                    present: newPresent,
                    future: []
                } : state;
        }
    }
}