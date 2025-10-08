import { useContext } from 'react';
import { ThemContext, Theme } from './ThemeContext';

type UseThemeResult = {
    theme: Theme;
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
};

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemContext);

    document.body.className = theme || Theme.LIGHT;

    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme?.(newTheme);
        saveAction?.(newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
};
