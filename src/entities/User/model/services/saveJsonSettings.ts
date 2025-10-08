import { createAsyncThunk } from '@reduxjs/toolkit';
import { JsonSettings } from '../types/jsonSettings';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/getUserInited/getJsonSettings';
import { setJsonSettingMutation } from '../api/userApi';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>('user', async (newJsonSettings, { rejectWithValue, dispatch, getState }) => {
    const userData = getUserAuthData(getState());
    const currentJsonSettings = getJsonSettings(getState());

    if (!userData) {
        return rejectWithValue('');
    }

    try {
        const response = await dispatch(
            setJsonSettingMutation({
                userId: userData.id,
                jsonSettings: {
                    ...currentJsonSettings,
                    ...newJsonSettings,
                },
            }),
        ).unwrap();

        if (!response.jsonSettings) {
            return rejectWithValue('');
        }

        return response.jsonSettings;
    } catch {
        return rejectWithValue('');
    }
});
