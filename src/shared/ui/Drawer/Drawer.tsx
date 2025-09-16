import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { useTheme } from 'shared/lib/theme/useTheme';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
    children?: ReactNode,
    onClose: () => void,
    className?: string,
    isOpen: boolean,
    lazy?: boolean
}

export const Drawer = ({
    className, isOpen, onClose, children, lazy,
}: DrawerProps) => {
    const { close, isClosing, isMounted } = useModal({ isOpen, onClose, animationDelay: 300 });
    const { theme } = useTheme();

    const mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) return null;

    return (
        <Portal>
            <div className={classNames(cls.drawer, [className, 'app_drawer', theme], mods)}>
                <Overlay onClose={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
