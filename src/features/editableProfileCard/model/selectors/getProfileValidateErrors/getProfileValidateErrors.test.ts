import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileErrors } from '../../consts/consts';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
    test('should return validate message', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileErrors.INCORRECT_COUNTRY],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileErrors.INCORRECT_COUNTRY]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
