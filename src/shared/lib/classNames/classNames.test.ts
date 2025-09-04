import { classNames } from './classNames';

describe('className', () => {
    test('with only first param', () => {
        expect(classNames('class1')).toBe('class1');
    });
    test('with additional class', () => {
        expect(classNames('class1', ['class2'])).toBe('class1 class2');
    });
    test('with mods', () => {
        expect(classNames('class1', ['class2'], { hovered: true })).toBe('class1 class2 hovered');
    });
    test('with mods false', () => {
        const expected = 'class1 class2 hovered';
        expect(classNames('class1', ['class2'], { hovered: true, scrollable: false }))
            .toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'class1 class2 hovered';
        expect(classNames('class1', ['class2'], { hovered: true, scrollable: undefined }))
            .toBe(expected);
    });
});
