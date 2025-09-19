import { PathRouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User';

export type AppRoutesProps = PathRouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
