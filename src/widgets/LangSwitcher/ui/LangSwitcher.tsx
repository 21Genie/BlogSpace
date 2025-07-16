import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import LangIcon from 'shared/assets/icons/language-icon.svg';

interface LangSwitcherProps {
   className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleLang}
        >
            <LangIcon />
        </Button>
    );
};
