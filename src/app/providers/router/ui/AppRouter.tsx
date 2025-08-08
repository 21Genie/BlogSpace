import { Suspense, useCallback, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
    const renderWithWrapper = useCallback(({ path, element, authOnly }: AppRoutesProps) => (
        <Route
            key={path}
            path={path}
            element={authOnly
                ? (
                    <div className="page-wrapper">
                        <RequireAuth>{element}</RequireAuth>
                    </div>
                )
                : (
                    <div className="page-wrapper">
                        {element}
                    </div>
                )}
        />
    ), []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
};
