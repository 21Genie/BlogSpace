import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export const enum CardTheme {
    NORMAl = 'normal',
    OUTLINED = 'outlined'
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode,
    className?: string,
    theme?: CardTheme
}

export const Card = ({
    className,
    children,
    theme = CardTheme.NORMAl,
    ...otherProps
}: CardProps) => (
    <div className={classNames(cls.card, [className, cls[theme]])} {...otherProps}>
        {children}
    </div>
);
