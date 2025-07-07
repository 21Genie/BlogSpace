import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { Link } from 'react-router-dom'

import { AboutPage } from 'pages/AboutPage/index'
import { MainPage } from 'pages/MainPage/index'

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

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}