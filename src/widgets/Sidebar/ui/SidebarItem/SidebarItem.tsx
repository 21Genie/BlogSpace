import { useTranslation } from 'react-i18next';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';

import { memo } from 'react';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
   item?: SidebarItemType,
   collapsed?: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const mods = {
        [cls.collapsed]: collapsed,
    };

    return (
        <AppLink
            to={item.path}
            className={classNames(cls.item, [], mods)}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(`${item.text}`)}
            </span>
        </AppLink>
    );
});
