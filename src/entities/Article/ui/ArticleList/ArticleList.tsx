import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TextSize, Text } from '@/shared/ui/Text/Text';
import { ArticleView } from '../../model/consts/consts';
import { Article } from '../../model/types/article';

import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

import cls from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    articles: Article[];
    view?: ArticleView;
    className?: string;
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((_, index) => <ArticleListItemSkeleton view={view} key={index} />);

export const ArticleList = ({
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
    target,
}: ArticleListProps) => {
    const { t } = useTranslation('articles');
    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.articleList, [className, cls[view]])}
            >
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleList, [className, cls[view]])}>
            {articles?.length > 0 ? articles?.map(renderArticle) : null}
            {isLoading && (
                <div
                    className={classNames(cls.articleList, [
                        className,
                        cls[view],
                    ])}
                >
                    {getSkeletons(view)}
                </div>
            )}
        </div>
    );
};
