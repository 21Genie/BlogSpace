import { PathRouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutes, PathRouteProps> = {
    [AppRoutes.MAIN]: {
        path: '/',
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: '/about',
        element: <AboutPage />,
    },
};
