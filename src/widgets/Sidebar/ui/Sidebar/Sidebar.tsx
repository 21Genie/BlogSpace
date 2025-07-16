import { useState } from 'react';

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';

import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
   className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed((prev) => !prev);

    const isCollapsed = collapsed ? '>' : '<';

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, [className], {
                [cls.collapsed]: collapsed,
            })}
        >
            <button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                type="button"
            >
                {isCollapsed}
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
