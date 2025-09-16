import { Profile } from '@/entities/Profile/model/types/profile';
import { ValidateProfileErrors } from '../consts/consts';

export interface ProfileSchema {
    isLoading: boolean;
    readonly: boolean;
    error?: string;
    data?: Profile;
    form?: Profile;
    validateErrors?: ValidateProfileErrors[];
}
