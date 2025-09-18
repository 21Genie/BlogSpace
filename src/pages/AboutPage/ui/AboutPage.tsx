import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import cls from './AboutPage.module.scss';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page className={cls.about}>
            {t('О нас')}
        </Page>
    );
};

export default AboutPage;
