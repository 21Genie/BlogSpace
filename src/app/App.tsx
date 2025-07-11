import { Navbar } from 'widgets/Navbar/Navbar';

import { useTheme } from 'shared/theme/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';

import './styles/index.scss';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';

export const App = () => {
    const { theme } = useTheme();

    useEffect(() => {
        if (Math.random() < 0.4) throw new Error();
    }, []);

    return (
        <div className={classNames('app', [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
