import { Link, LinkProps } from 'react-router-dom';
import { ReactNode } from 'react';

import { classNames } from 'shared/lib/classNames';

import cls from './AppLink.module.scss';

const enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    children: ReactNode,
    theme?: AppLinkTheme,
    className?: string,
}

export const AppLink = (props: AppLinkProps) => {
    const {
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        className,
        ...otherProps
    } = props;

    return (
        <Link to={to} className={classNames(cls.appLink, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};
