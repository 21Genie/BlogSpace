import { useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';

import cls from './Code.module.scss';

interface CodeProps {
    text: string,
    className?: string
}

export const Code = ({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.code, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
                <CopyIcon className={cls.icon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};
