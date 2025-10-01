import React, { Fragment, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';
import { AppRoutesProps } from '@/shared/types/router';
import { RequireAuth } from './RequireAuth';
import { routeConfig } from '../config/routeConfig';

export const AppRouter = () => {
    const renderWithWrapper = useCallback(
        ({ path, element, authOnly, roles }: AppRoutesProps) => (
            <Route
                key={path}
                path={path}
                element={
                    authOnly ? (
                        <RequireAuth roles={roles}>{element}</RequireAuth>
                    ) : (
                        <>{element}</>
                    )
                }
            />
        ),
        [],
    );

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
};
