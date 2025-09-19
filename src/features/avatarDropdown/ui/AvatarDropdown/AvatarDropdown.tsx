import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { routePath } from '@/shared/const/router';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

export const AvatarDropdown = () => {
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const dispatch = useDispatch();
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            direction="bottom left"
            trigger={<Avatar size={30} src={authData.avatar} />}
            items={[
                ...(isAdminPanelAvailable ? [{
                    content: 'Админка', href: routePath.admin_panel,
                }] : []),
                { content: 'Профиль', href: routePath.profile + authData.id },
                { content: 'Выйти', onClick: onLogout },
            ]}
        />
    );
};
