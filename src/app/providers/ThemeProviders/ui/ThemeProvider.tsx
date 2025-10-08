import { ReactNode, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    ThemContext,
    Theme,
} from '@/shared/lib/theme/ThemeContext';
import { useSelector } from 'react-redux';
import { getJsonSettings } from '@/entities/User';

type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const { theme: defaultTheme = Theme.LIGHT } = useSelector(getJsonSettings);
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
