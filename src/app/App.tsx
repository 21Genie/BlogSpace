import { Link } from 'react-router-dom'

import { AppRouter } from './providers/router'

import { useTheme } from 'shared/theme/useTheme'
import { classNames } from 'shared/lib/classNames'

import './styles/index.scss'

export const App = () => {
    const {theme, toggleTheme} = useTheme()
    
    return (
        <div className={classNames('app', [theme])}>
            <button onClick={toggleTheme}>ToggleTheme</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>

            <AppRouter/>
        </div>
    )
}