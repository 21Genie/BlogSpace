import { PathRouteProps } from 'react-router-dom';
/* eslint-disable-next-line */
import { UserRole } from '@/entities/User';

export type AppRoutesProps = PathRouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
