import { Page } from '@/widgets/Page/Page';
import { useTranslation } from 'react-i18next';
import cls from './AboutPage.module.scss';
import { RatingCard } from '@/entities/Rating';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page className={cls.about}>
            {t('О нас')}
            <RatingCard 
                title='Оцените статью'
                feedbackTitle='Оставьте отзыв о статье'
                hasFeedback
            />
        </Page>
    );
};

export default AboutPage;
