import { Navbar } from 'widgets/Navbar/Navbar';

import { useTheme } from 'shared/theme/useTheme';
import { classNames } from 'shared/lib/classNames';

import './styles/index.scss';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';

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
