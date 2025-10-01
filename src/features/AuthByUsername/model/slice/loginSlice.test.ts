import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'admin' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('admin'),
            ),
        ).toEqual({ username: 'admin' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword('123')),
        ).toEqual({ password: '123' });
    });
});
