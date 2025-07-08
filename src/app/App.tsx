import { AppRouter } from './providers/router'

import { Navbar } from 'widgets/Navbar/Navbar'

import { useTheme } from 'shared/theme/useTheme'
import { classNames } from 'shared/lib/classNames'

import './styles/index.scss'
import { Sidebar } from 'widgets/Sidebar'

export const App = () => {
    const {theme} = useTheme()
    
    return (
        <div className={classNames('app', [theme])}>
            <Navbar/>
            <div className='content-page'>
                <Sidebar />
                <AppRouter/>
            </div>
        </div>
    )
}