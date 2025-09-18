import { Profile } from '@/entities/Profile';
import { ValidateProfileErrors } from '../consts/consts';

export interface ProfileSchema {
    isLoading: boolean;
    readonly: boolean;
    error?: string;
    data?: Profile;
    form?: Profile;
    validateErrors?: ValidateProfileErrors[];
}
