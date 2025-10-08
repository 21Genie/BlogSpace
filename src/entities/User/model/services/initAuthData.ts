import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { User } from '../types/user';
import { getUserDataByIdQuery } from '../api/userApi';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, { rejectWithValue, dispatch }) => {
        const userId = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
        if (!userId) return rejectWithValue('');

        try {
            const response = await dispatch(
                getUserDataByIdQuery(userId),
            ).unwrap();

            return response;
        } catch (e) {
            return rejectWithValue('');
        }
    },
);
