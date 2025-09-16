import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string,
    onClose: () => void
}

export const Overlay = ({ className, onClose }: OverlayProps) => (
    <div onClick={onClose} className={classNames(cls.overlay, [className])} />
);
