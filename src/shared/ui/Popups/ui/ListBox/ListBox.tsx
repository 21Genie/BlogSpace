import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { DropdownDirection } from '@/shared/types/ui';
import { Button } from '../../../Button/Button';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListboxProps {
    className?: string;
    items?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export const Listbox = ({
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom left',
    label,
}: ListboxProps) => {
    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <div
            className={classNames(cls.listBoxWrapper, [], {
                [cls.readonly]: readonly,
            })}
        >
            {label && <span className={cls.label}>{`${label}>`}</span>}

            <HListBox
                as="div"
                disabled={readonly}
                className={classNames(popupCls.popup, [className], {
                    [cls.readonly]: readonly,
                })}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button as="div" className={popupCls.trigger}>
                    <Button>{value ?? defaultValue}</Button>
                </HListBox.Button>

                <HListBox.Options
                    className={classNames(cls.options, optionsClasses)}
                >
                    {items &&
                        items.map((item) => (
                            <HListBox.Option
                                key={item.value}
                                value={item.value}
                                disabled={item?.disabled}
                                as={Fragment}
                            >
                                {({ active, selected }) => (
                                    <li
                                        className={classNames(cls.item, [], {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
                                        })}
                                    >
                                        {selected && '>'}
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
