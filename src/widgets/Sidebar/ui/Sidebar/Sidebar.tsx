import { useState } from 'react'

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { classNames} from 'shared/lib/classNames'

import cls from './Sidebar.module.scss'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface SidebarProps {
   className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => setCollapsed((prev) => !prev)

    return (
        <div className={classNames(cls.sidebar, [className], {
            [cls.collapsed]: collapsed
        })}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
     )
}
