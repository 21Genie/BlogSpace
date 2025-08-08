import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { routePath } from 'shared/config/routeConfig/routeConfig';

export const RequireAuth = ({ children }: {children: any}) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={routePath.main} state={{ from: location }} replace />;
    }

    return children;
};
