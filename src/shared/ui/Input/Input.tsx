import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, memo, MutableRefObject, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        name,
        className,
        placeholder,
        type = 'text',
        value,
        onChange,
        autofocus,
        ...otherProps
    } = props;

    const inputRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;
    const [caretPosition, setCaretPosition] = useState(0);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => setIsFocused(false);
    const onFocus = () => setIsFocused(true);
    const onSelect = (e: any) => setCaretPosition(e?.target?.selectionStart || 0);

    return (
        <div className={classNames(cls.inputWrapper, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={inputRef}
                    className={cls.input}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChangeHandler}
                    onSelect={onSelect}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    {...otherProps}
                />

                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 7}px` }}
                    />
                )}
            </div>
        </div>
    );
});
