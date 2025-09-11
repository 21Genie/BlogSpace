import { Profile } from 'entities/Profile';
import { ValidateProfileErrors } from '../../consts/consts';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) return [ValidateProfileErrors.NO_DATA];

    const {
        first, lastname, age, country,
    } = profile;

    const errors: ValidateProfileErrors[] = [];

    if (!first || !lastname) errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
    if (!age || age > 120) errors.push(ValidateProfileErrors.INCORRECT_AGE);
    if (!country) errors.push(ValidateProfileErrors.INCORRECT_COUNTRY);

    return errors;
};
