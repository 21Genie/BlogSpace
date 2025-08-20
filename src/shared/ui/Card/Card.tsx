import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode,
    className?: string
}

export const Card = ({ className, children, ...otherProps }: CardProps) => (
    <div className={classNames(cls.card, [className])} {...otherProps}>
        {children}
    </div>
);
