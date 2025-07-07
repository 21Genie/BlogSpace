import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemContext, Theme } from './ThemeContext'

type UseThemeResult = {
    theme: Theme,
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return { theme, toggleTheme }
}