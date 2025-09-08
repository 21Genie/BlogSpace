import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button } from '../Button/Button';
import cls from './ListBox.module.scss';

type DropdownDirection = 'top' | 'bottom';

export interface ListBoxItem {
    value: string,
    content: ReactNode,
    disabled?: boolean
}

interface ListboxProps {
    items?: ListBoxItem[],
    value?: string,
    defaultValue?: string,
    onChange: (value: string) => void,
    className?: string,
    readonly?: boolean,
    label?: string,
    direction?: DropdownDirection,
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export const Listbox = ({
    items,
    onChange,
    className,
    value,
    defaultValue,
    readonly,
    label,
    direction = 'bottom',
} : ListboxProps) => {
    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <div className={classNames(cls.listBoxWrapper, [], { [cls.readonly]: readonly })}>
            {label && <span className={cls.label}>{`${label}>`}</span>}

            <HListBox
                as="div"
                disabled={readonly}
                className={classNames(cls.listbox, [className], { [cls.readonly]: readonly })}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button className={cls.trigger}>
                    <Button>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>

                <HListBox.Options className={classNames(cls.options, optionsClasses)}>
                    {items && items.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item?.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, [], {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                    })}
                                >
                                    {selected && '> '}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </div>
    );
};
