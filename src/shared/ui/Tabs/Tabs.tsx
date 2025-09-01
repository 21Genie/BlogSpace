import { ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';

import cls from './Tabs.module.scss';

export interface TabItem {
    value: string,
    content: ReactNode
}

interface TabsProps {
    className?: string,
    tabs: TabItem[],
    value: string,
    onTabClick: (tab: TabItem) => void
}

export const Tabs = ({
    className, tabs, value, onTabClick,
}: TabsProps) => {
    const clickHandle = useCallback(
        (tab: TabItem) => () => onTabClick(tab),
        [onTabClick],
    );

    return (
        <div className={classNames(cls.tabs, [className])}>
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    onClick={clickHandle(tab)}
                    theme={value === tab.value ? CardTheme.OUTLINED : CardTheme.NORMAl}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
