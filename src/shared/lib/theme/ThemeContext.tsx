import { createContext } from 'react';

export enum Theme {
    DARK = 'app_dark_theme',
    LIGHT = 'app_light_theme',
}

export type ThemeContextProps = {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
};

export const ThemContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
