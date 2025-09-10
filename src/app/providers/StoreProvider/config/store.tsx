import {
    CombinedState, configureStore,
    Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { scrollSaveReducer } from 'features/ScrollSave/model/slice/scrollSaveSlice';
import { $api } from 'shared/api/api';
import { rtkApi } from 'shared/api/rtkApi';
import { userReducer } from '../../../../entities/User';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './stateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        scrollSave: scrollSaveReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
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
        })).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
