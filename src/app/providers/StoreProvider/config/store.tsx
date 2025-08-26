import {
    CombinedState, configureStore, getDefaultMiddleware, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { NavigateFunction } from 'react-router-dom';
import { counterReducer } from '../../../../entities/Counter';
import { userReducer } from '../../../../entities/User';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './stateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => (getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
        })),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
