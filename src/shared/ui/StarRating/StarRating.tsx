import { useState } from 'react';
import StarIcon from '@/shared/assets/icons/star.svg';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Icon } from '../Icon/Icon';
import cls from './StarRating.module.scss';

interface StarRatingProps {
    className?: string,
    size?: number,
    onSelect?: (starsCount: number) => void,
    rating?: number
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = ({
    className,
    onSelect,
    rating = 0,
    size = 30,
}: StarRatingProps) => {
    const [currentStarsCount, setCurrentStarsCount] = useState(rating);
    const [isSelected, setIsSelected] = useState(Boolean(rating));

    const onHover = (starNumber: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starNumber);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onCLick = (starNumber: number) => () => {
        if (!isSelected) {
            onSelect?.(starNumber);
            setCurrentStarsCount(starNumber);
            setIsSelected(true);
        }
    };

    const mods: Mods = {
        [cls.selected]: isSelected,
    };

    return (
        <div className={classNames(cls.starRating, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(cls.starIcon, [
                        currentStarsCount >= starNumber ? cls.hovered : cls.normal,
                    ], mods)}
                    width={size}
                    height={size}
                    Svg={StarIcon}
                    key={starNumber}
                    onMouseEnter={onHover(starNumber)}
                    onMouseLeave={onLeave}
                    onClick={onCLick(starNumber)}
                />
            ))}
        </div>
    );
};
