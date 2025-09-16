import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';
import { AppRoutesProps, routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
    const renderWithWrapper = useCallback(({
        path, element, authOnly, roles,
    }: AppRoutesProps) => (
        <Route
            key={path}
            path={path}
            element={authOnly
                ? (
                    <RequireAuth roles={roles}>{element}</RequireAuth>
                )
                : (
                    <div>
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
