import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { loginReducer } from 'features/AuthByUsername';
import { counterReducer } from '../../../../entities/Counter';
import { userReducer } from '../../../../entities/User';

import { StateSchema } from './stateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
