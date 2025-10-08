import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { User, UserSchema } from '../types/user';
import { setFeatures } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { initAuthData } from '../services/initAuthData';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatures(action.payload.features);
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, action.payload.id);
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
        },
    },
    extraReducers: (create) => {
        create.addCase(saveJsonSettings.fulfilled, (state, { payload }) => {
            if (state.authData) {
                state.authData.jsonSettings = payload;
            }
        });
        create.addCase(initAuthData.fulfilled, (state, { payload }) => {
            state.authData = payload;
            setFeatures(payload.features);
            state._inited = true;
        });
        create.addCase(initAuthData.rejected, (state, { payload }) => {
            state._inited = true;
        });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
