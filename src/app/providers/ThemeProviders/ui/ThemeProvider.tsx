import { ReactNode, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    ThemContext,
    Theme,
} from '@/shared/lib/theme/ThemeContext';
import { getJsonSettings } from '@/entities/User';

type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const { theme: defaultTheme } = useSelector(getJsonSettings);
    const [isThemeInited, setIsThemeInited] = useState(false);
    const [theme, setTheme] = useState(defaultTheme || Theme.LIGHT);

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme);
            setIsThemeInited(true);
        }
    }, [defaultTheme, isThemeInited]);

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
