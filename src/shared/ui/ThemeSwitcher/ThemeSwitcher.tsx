import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/theme/useTheme';

import DarkIcon from 'shared/assets/icons/dark.svg';
import LightIcon from 'shared/assets/icons/light.svg';
import { Theme } from 'shared/theme/ThemeContext';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
   className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    const ThemeIcon = theme === Theme.DARK ? <DarkIcon /> : <LightIcon />;

    return (
        <Button
            onClick={toggleTheme}
            className={classNames('', [className])}
            theme={ThemeButton.CLEAR}
        >
            {ThemeIcon}
        </Button>
    );
};
