import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { LangSwitcher } from 'widgets/LangSwitcher';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

import { routePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
   className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div
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

            <ul className={cls.items}>
                <li>
                    <AppLink to={routePath.main} className={cls.item}>
                        <MainIcon className={cls.icon} />
                        <span className={cls.link}>
                            {t('Главная')}
                        </span>
                    </AppLink>
                </li>
                <li>
                    <AppLink to={routePath.about} className={cls.item}>
                        <AboutIcon className={cls.icon} />
                        <span className={cls.link}>
                            {t('О нас')}
                        </span>
                    </AppLink>
                </li>
            </ul>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
