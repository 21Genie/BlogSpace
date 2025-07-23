import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './stateSchema';

export const createReduxStore = (initialState: StateSchema) => configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
});
