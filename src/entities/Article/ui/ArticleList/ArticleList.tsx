import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';

import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

import cls from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    articles: Article[],
    view?: ArticleView,
    className?: string,
    isLoading?: boolean
}

const getSkeletons = (view: ArticleView) => (
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((_, index) => (
            <ArticleListItemSkeleton view={view} key={index} />
        ))
);

export const ArticleList = ({
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
}: ArticleListProps) => {
    const renderArticle = (article: Article) => (
        <ArticleListItem article={article} view={view} key={article.id} />
    );

    return (
        <div className={classNames(cls.articleList, [className, cls[view]])}>
            {articles?.length > 0
                ? articles?.map(renderArticle)
                : null}
            {isLoading && (
                <div className={classNames(cls.articleList, [className, cls[view]])}>
                    {getSkeletons(view)}
                </div>
            )}
        </div>
    );
};
