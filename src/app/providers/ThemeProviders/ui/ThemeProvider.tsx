import { ReactNode, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    ThemContext,
    Theme,
} from '@/shared/lib/theme/ThemeContext';

type ThemeProviderProps = {
    children: ReactNode;
};

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemContext.Provider value={defaultProps}>
            {children}
        </ThemContext.Provider>
    );
};
