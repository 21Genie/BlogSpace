import { Profile } from 'entities/Profile/model/types/profile';

export const enum ValidateProfileErrors {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface ProfileSchema {
    isLoading: boolean;
    readonly: boolean;
    error?: string;
    data?: Profile;
    form?: Profile;
    validateErrors?: ValidateProfileErrors[];
}
