import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
    test('success loading', async () => {
        const userValue = { username: '123', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: '123', password: '123' });
        console.log(result);

        // expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        // expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        // expect(mockedAxios.post).toHaveBeenCalled();
        // expect(result.meta.requestStatus).toBe('fulfilled');
        // expect(result.payload).toEqual(userValue);
    });

    // test('error loading', async () => {
    //    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //    const thunk = new TestAsyncThunk(loginByUsername);
    //    const result = await thunk.callThunk({ username: '123', password: '123' });

    //    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    //    expect(mockedAxios.post).toHaveBeenCalled();
    //    expect(result.meta.requestStatus).toBe('rejected');
    //    expect(result.payload).toBe('error');
    // });
});
