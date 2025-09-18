import { SVGProps, VFC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
    Svg: VFC<SVGProps<SVGSVGElement>>
    className?: string,
    inverted?: boolean
}

export const Icon = ({
    className, Svg, inverted, ...otherProps
}: IconProps) => (
    <Svg
        className={classNames(inverted ? cls.inverted : cls.icon, [className])}
        {...otherProps}
    />
);
