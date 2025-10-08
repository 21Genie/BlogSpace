import { rtkApi } from '@/shared/api/rtkApi';
import { User } from '../types/user';
import { JsonSettings } from '../types/jsonSettings';

interface SetJsonSettingsArg {
    userId: string;
    jsonSettings: JsonSettings;
}

export const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        setJsonSettings: build.mutation<User, SetJsonSettingsArg>({
            query: ({ userId, jsonSettings }) => ({
                url: `/users/${  userId}`,
                method: 'PATCH',
                body: {
                    jsonSettings,
                },
            }),
        }),
        getUserDataById: build.query<User, string>({
            query: (userId) => ({
                url: `/users/${  userId}`,
                method: 'GET',
            }),
        }),
    }),
});

export const setJsonSettingMutation =
    userApi.endpoints.setJsonSettings.initiate;

export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;
