import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    src: string,
    className?: string,
    alt?: string,
    size?: number,
}

export const Avatar = ({
    className, src, alt, size,
}: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            className={classNames(cls.avatar, [className])}
            style={styles}
            src={src}
            alt={alt}
        />
    );
};
