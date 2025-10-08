import { rtkApi } from '@/shared/api/rtkApi';
import { User } from '../types/user';
import { JsonSettings } from '../types/jsonSettings';

interface jsonSettingArg {
    userId: string;
    jsonSettings: JsonSettings;
}

export const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        setJsonSetting: build.mutation<User, jsonSettingArg>({
            query: ({ userId, jsonSettings }) => ({
                url: '/users/' + userId,
                method: 'PATCH',
                body: {
                    jsonSettings,
                },
            }),
        }),
    }),
});

export const setJsonSettingMutation = userApi.endpoints.setJsonSetting.initiate;
