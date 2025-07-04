import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { Link } from 'react-router-dom'

import { AboutPageAsync } from '../pages/AboutPage/AboutPage.async'
import { MainPageAsync } from '../pages/MainPage/MainPage.async'

import '../styles/index.scss'
import { useTheme } from '../theme/useTheme'
import { classNames } from '../helpers/classNames/classNames'

export const App = () => {
    const {theme, toggleTheme} = useTheme()
    
    return (
        <div className={classNames('app', [theme])}>
            <button onClick={toggleTheme}>ToggleTheme</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageAsync/>}/>
                    <Route path='/about' element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}