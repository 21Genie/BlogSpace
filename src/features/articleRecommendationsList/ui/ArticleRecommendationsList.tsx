import { ArticleList } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useArticleRecommendations } from '../api/articleRecommendationsApi';
import cls from './ArticleRecommendationsList.module.scss';

export const ArticleRecommendationsList = () => {
    const { t } = useTranslation('article');
    const { data: articlesRecommendations, isLoading, error } = useArticleRecommendations(3);

    if (isLoading || error) {
        return null;
    }

    return (
        <div>
            <Text size={TextSize.L} className={cls.commentTitle} title={t('Рекомендуем')} />
            <ArticleList
                className={cls.recommendations}
                articles={articlesRecommendations}
                target="_blank"
            />
        </div>
    );
};
