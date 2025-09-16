import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileSchema } from '../../model/types/editableProfileCardSchema';
import { ValidateProfileErrors } from '../consts/consts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileAction, profileReducer } from './profileSlice';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Armenia,
    lastname: 'Test',
    first: 'Test',
    city: 'Test',
    currency: Currency.RUB,
};

describe('profileSlice', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(state as ProfileSchema, profileAction.setReadonly(true)),
        ).toEqual({ readonly: true });
    });
    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: data };
        expect(
            profileReducer(state as ProfileSchema, profileAction.updateProfile({
                ...data, lastname: 'test',
            })),
        ).toEqual({ form: { ...data, lastname: 'test' } });
    });

    test('update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, validateErrors: [ValidateProfileErrors.SERVER_ERROR] };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({ isLoading: true, validateErrors: undefined });
    });

    test('update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')),
        ).toEqual({
            isLoading: false,
            readonly: true,
            validateErrors: undefined,
            form: data,
            data,
        });
    });
});
