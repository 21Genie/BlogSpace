import { classNames } from 'shared/lib/classNames'
import cls from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import { AppLink } from 'shared/ui/AppLink/AppLink'


interface NavbarProps {
   className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, [className])}>
            <div className={cls.links}>
                <AppLink className={cls.main_link}  to={'/'}>Main Page</AppLink>
                <AppLink to={'/about'}>About Page</AppLink>
            </div>
        </div>
     )
}
