import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency/index';

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
}
