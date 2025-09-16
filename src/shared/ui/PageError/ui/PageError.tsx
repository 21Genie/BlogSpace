import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../../Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
   className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.pageError, [className])}>
            <p>{t('Упс. произошла непредвиденная ошибка!')}</p>
            <Button className={cls.buttonReload} onClick={reloadPage} theme={ButtonTheme.CLEAR}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
