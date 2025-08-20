import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article';
import { Article, ArticleType, ArticleView } from 'entities/Article/model/types/article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
   className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article');
    return (
        <div className={classNames(cls.articlesPage, [className])}>
            <ArticleList
                view={ArticleView.SMALL}
                articles={[]}
            />
        </div>
    );
};

export default memo(ArticlesPage);
