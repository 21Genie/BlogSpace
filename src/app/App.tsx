import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar/Navbar'
import { useTheme } from 'shared/theme/useTheme'
import { classNames } from 'shared/lib/classNames'

import './styles/index.scss'

export const App = () => {
    const {theme, toggleTheme} = useTheme()
    
    return (
        <div className={classNames('app', [theme])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>ToggleTheme</button>
        </div>
    )
}