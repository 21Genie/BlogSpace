import { memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/theme/useTheme';

import { saveJsonSettings } from '@/entities/User';
import DarkIcon from '@/shared/assets/icons/dark.svg';
import LightIcon from '@/shared/assets/icons/light.svg';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Theme } from '@/shared/lib/theme/ThemeContext';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const ThemeIcon =
        theme === Theme.DARK ? (
            <DarkIcon className={cls.darkTheme} />
        ) : (
            <LightIcon />
        );

    const onToggleHandleClick = useCallback(() => {
        toggleTheme((newTheme: Theme) =>
            dispatch(saveJsonSettings({ theme: newTheme })),
        );
    }, [toggleTheme, dispatch]);

    return (
        <Button
            onClick={onToggleHandleClick}
            className={classNames('', [className])}
            theme={ButtonTheme.CLEAR}
        >
            {ThemeIcon}
        </Button>
    );
});
