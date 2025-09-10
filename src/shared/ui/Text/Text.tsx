import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export const enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error'
}

export const enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export const enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
   className?: string
   title?: string,
   text?: string,
   theme?: TextTheme,
   align?: TextAlign,
   size?: TextSize,
   'data-testid'?: string
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestid = '',
    } = props;

    const mods = {
        [cls[theme]]: theme,
    };

    return (
        <div className={classNames('', [className, cls[align], cls[size]], mods)}>
            {title && (
                <p
                    className={cls.title}
                    data-testid={`${dataTestid}.Header`}
                >
                    {title}
                </p>
            )}
            {text && (
                <p
                    className={cls.text}
                    data-testid={`${dataTestid}.Paragraph`}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
