import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.scss';

export const enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export const enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    className?: string,
    theme?: ButtonTheme,
    square?: boolean,
    size?: ButtonSize,
    disabled?: boolean
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        square,
        disabled,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
        <button
            className={classNames(cls.button, [className, cls[theme], cls[size]], mods)}
            {...otherProps}
            type="button"
            disabled={disabled}
        >
            {children}
        </button>
    );
};
