import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider/index';
import { User, userActions } from '../../../../../entities/User/index';

interface loginByUsernameProps {
    username: string,
    password: string
}

export const loginByUsername = createAsyncThunk<
    User, loginByUsernameProps, ThunkConfig<string>
>(
    'login/loginByUsername',
    async (authData, { dispatch, rejectWithValue, extra }) => {
        try {
            const { api } = extra;
            const response = await api.post<User>('/login', authData);

            if (!response.data) throw new Error();

            dispatch(userActions.setAuthData(response.data));
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
