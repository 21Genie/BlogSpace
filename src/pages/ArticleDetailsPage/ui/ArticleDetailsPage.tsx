import { useNavigate, useParams } from 'react-router-dom';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import { Button } from 'shared/ui/Button/Button';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { ArticleDetails } from '../../../entities/Article';
import { CommentList } from '../../../entities/Comment';

import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading, getArticleCommentsError } from '../model/selectors/comments';
import { addCommentFormArticle } from '../model/services/addCommentFormArticle/addCommentFormArticle';

interface ArticleDetailsPageProps {
   className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);

    const onBackToArticle = useCallback(() => {
        navigate(routePath.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentFormArticle(text));
    }, [dispatch]);

    if (!id) {
        return (
            <Page className={classNames(cls.articleDetailsPage, [className])}>
                {t('Статья не найдена')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.articleDetailsPage, [className])}>
                <Button onClick={onBackToArticle}>{t('Назад к списку')}</Button>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList isLoading={isLoading} comments={comments} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
