import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useArticleRate, useGetArticleRating } from '../../api/articleRating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = ({ className, articleId }: ArticleRatingProps) => {
    const { t } = useTranslation('article');
    const userAuth = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userAuth?.id ?? '',
    });
    const [articleRateMutation] = useArticleRate();

    const handleArticleRate = useCallback(
        (startsCount: number, feedback?: string) => {
            try {
                articleRateMutation({
                    userId: userAuth?.id ?? '',
                    articleId,
                    rate: startsCount,
                    feedback,
                });
            } catch (e) {
                console.log(e);
            }
        },
        [articleId, articleRateMutation, userAuth?.id],
    );

    const onAccept = useCallback(
        (startsCount: number, feedback?: string) => {
            handleArticleRate(startsCount, feedback);
        },
        [handleArticleRate],
    );

    const onCancel = useCallback(
        (startsCount: number) => {
            handleArticleRate(startsCount);
        },
        [handleArticleRate],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t(
                'Оставьте совй отзыв о статье, это поможет улучшить качество',
            )}
            hasFeedback
            rating={rating?.rate}
        />
    );
};

export default ArticleRating;
