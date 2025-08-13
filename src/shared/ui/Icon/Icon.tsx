import { classNames } from 'shared/lib/classNames/classNames';
import { SVGProps, VFC } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    Svg: VFC<SVGProps<SVGSVGElement>>
    className?: string
}

export const Icon = ({ className, Svg }: IconProps) => (
    <Svg className={classNames(cls.icon, [className])} />
);
