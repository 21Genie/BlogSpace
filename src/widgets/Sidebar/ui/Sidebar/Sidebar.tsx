import { useSelector } from 'react-redux';
import { memo, useState } from 'react';

import { LangSwitcher } from '@/widgets/LangSwitcher';

import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { ThemeSwitcher } from '../../../ThemeSwitcher/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';

import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';
import { getSidebarItems } from '../../model/selector/getSidebarItems';

interface SidebarProps {
   className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.sidebar, [className], {
                [cls.collapsed]: collapsed,
            })}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                type="button"
                square
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                className={cls.collapsedBtn}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <nav>
                <ul className={cls.items}>
                    { sidebarItemsList.map((item) => (
                        <li key={item.path}>
                            <SidebarItem
                                item={item}
                                collapsed={collapsed}
                            />
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </aside>
    );
});
