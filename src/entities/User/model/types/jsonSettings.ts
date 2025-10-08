import { Theme } from '@/shared/lib/theme/ThemeContext';

export interface JsonSettings {
    theme?: Theme;
    isFirstVisit?: boolean;
    settingsPageHasBeenOpen?: boolean;
}
