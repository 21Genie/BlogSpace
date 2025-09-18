import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import cls from './MainPage.module.scss';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page className={cls.main}>
            {t('Главная')}
        </Page>
    );
};

export default MainPage;
