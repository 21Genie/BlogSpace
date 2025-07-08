import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib/classNames'

import cls from './Navbar.module.scss'
interface NavbarProps {
   className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, [className])}>
            <ThemeSwitcher />

            <div className={cls.links}>
                <AppLink className={cls.main_link}  to={'/'}>Main Page</AppLink>
                <AppLink to={'/about'}>About Page</AppLink>
            </div>
        </div>
     )
}
