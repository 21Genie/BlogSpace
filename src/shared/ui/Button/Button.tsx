import { classNames} from 'shared/lib/classNames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export const enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    className?: string,
    theme?: ThemeButton
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        ...otherProps 
    } = props

    return (
        <button
            className={classNames(cls.button , [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
     )
}
