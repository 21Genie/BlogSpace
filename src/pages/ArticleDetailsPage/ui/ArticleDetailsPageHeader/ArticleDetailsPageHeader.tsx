import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';

import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = ({
    className,
}: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToArticle = useCallback(() => {
        navigate('/articles');
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`/articles/${article?.id}/edit`);
    }, [navigate, article?.id]);

    return (
        <div className={classNames(cls.articleDetailsPageHeader, [className])}>
            <Button onClick={onBackToArticle}>{t('Назад к списку')}</Button>
            {canEdit && (
                <Button className={cls.editBtn} onClick={onEditArticle}>
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
};
