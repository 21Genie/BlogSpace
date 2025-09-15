import { classNames } from 'shared/lib/classNames/classNames';
import { SVGProps, VFC } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    Svg: VFC<SVGProps<SVGSVGElement>>
    className?: string,
    inverted?: boolean
}

export const Icon = ({ className, Svg, inverted }: IconProps) => (
    <Svg className={classNames(inverted ? cls.inverted : cls.icon, [className])} />
);
