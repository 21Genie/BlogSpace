import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string> >(
    'profile/fetchProfileData',
    async (_, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.get('/profile');
            console.log(response.data);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
