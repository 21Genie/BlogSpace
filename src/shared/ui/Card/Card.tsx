import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export const enum CardTheme {
    NORMAl = 'normal',
    OUTLINED = 'outlined',
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    theme?: CardTheme;
    fullWidth?: boolean;
}

export const Card = ({
    className,
    children,
    theme = CardTheme.NORMAl,
    fullWidth,
    ...otherProps
}: CardProps) => (
    <div
        className={classNames(cls.card, [className, cls[theme]], {
            [cls.fullWidth]: fullWidth,
        })}
        {...otherProps}
    >
        {children}
    </div>
);
