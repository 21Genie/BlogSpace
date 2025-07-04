import { Route, Routes } from 'react-router-dom'
import style from './App.module.scss'
import { AboutPageAsync } from '../pages/AboutPage/AboutPage.async'
import { MainPageAsync } from '../pages/MainPage/MainPage.async'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'

export const App = () => {
    return (
        <div className={style.wrap}>
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