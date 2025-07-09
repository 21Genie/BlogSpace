import { AppLink } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames';

import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
   className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, [className])}>
            <div className={cls.links}>
                <AppLink className={cls.main_link} to="/">{t('Главная')}</AppLink>
                <AppLink to="/about">{t('О нас')}</AppLink>
            </div>
        </div>
    );
};
