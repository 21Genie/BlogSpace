import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
    test('test with one param', () => {
        const param = {
            test: '1',
        };
        expect(getQueryParams(param)).toBe('?test=1');
    });
    test('test with multiple params', () => {
        const param = {
            test: '1',
            size: 'm',
        };
        expect(getQueryParams(param)).toBe('?test=1&size=m');
    });
    test('test with undefined', () => {
        const param = {
            test: '1',
            size: undefined,
        };
        expect(getQueryParams(param)).toBe('?test=1');
    });
});
