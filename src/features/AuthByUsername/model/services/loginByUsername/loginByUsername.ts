import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { User, userActions } from '../../../../../entities/User/index';

interface loginByUsernameProps {
    username: string,
    password: string
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);

            if (!response.data) throw new Error();

            thunkAPI.dispatch(userActions.setAuthData(response.data));
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
