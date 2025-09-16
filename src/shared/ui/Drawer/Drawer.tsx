import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { useTheme } from 'shared/lib/theme/useTheme';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
    children?: ReactNode,
    onClose: () => void,
    className?: string,
    isOpen: boolean
}

export const Drawer = ({
    className, isOpen, onClose, children,
}: DrawerProps) => {
    const { theme } = useTheme();
    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(cls.drawer, [className, 'app_drawer', theme], mods)}>
                <Overlay onClose={onClose} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
