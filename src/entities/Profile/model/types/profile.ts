import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency/index';

export const enum ValidateProfileErrors {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}
export interface Profile {
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
    isLoading: boolean,
    readonly: boolean,
    error?: string,
    data?: Profile,
    form?: Profile
    validateErrors?: ValidateProfileErrors[]
}
