import { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';

export const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }
        return true;
    }), [isAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {
                    routes.map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={(
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            )}
                        />
                    ))
                }
            </Routes>
        </Suspense>
    );
};
