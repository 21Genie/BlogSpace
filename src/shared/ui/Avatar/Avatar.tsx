import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage/AppImage';
import { Skeleton } from '../Skeleton/Skeleton';
import { Icon } from '../Icon/Icon';

import UserImage from '@/shared/assets/icons/user-filled.svg';

interface AvatarProps {
    src?: string;
    className?: string;
    alt?: string;
    size?: number;
}

export const Avatar = ({ className, src, alt, size }: AvatarProps) => {
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = (
        <Icon inverted Svg={UserImage} width={size} height={size} />
    );

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            className={classNames(cls.avatar, [className])}
            style={styles}
            src={src}
            alt={alt}
        />
    );
};
