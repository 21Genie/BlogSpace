import {
    AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { MountedReducers, StateSchema, StateSchemaKey } from './stateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>) {
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);
    let keysToRemove: StateSchemaKey[] = [];
    const reducerManager: MountedReducers = {};

    return {
        getReducerMap: () => reducers,
        getMountedReducers: () => reducerManager,
        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => delete state[key]);
                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) return;

            reducers[key] = reducer;
            reducerManager[key] = true;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) return;

            delete reducers[key];
            keysToRemove.push(key);
            reducerManager[key] = false;
            combinedReducer = combineReducers(reducers);
        },
    };
}
