import { Suspense } from 'react';

import { Navbar } from 'widgets/Navbar/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from 'shared/theme/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

import './styles/index.scss';

export const App = () => {
    const { theme } = useTheme();

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
