import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOptions {
    value: string,
    content: string,
}

interface SelectProps {
   className?: string,
   label?: string,
   options?: SelectOptions[],
   value?: string,
   onChange?: (value: string) => void,
   readonly?: boolean,
}

export const Select = ({
    className, label, value, onChange, options, readonly,
}: SelectProps) => {
    const optionsList = useMemo(() => options?.map((item) => (
        <option value={item.value} key={item.value}>{item.content}</option>
    )), [options]);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.wrapper, [className], mods)}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
};
