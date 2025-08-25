import { classNames } from 'shared/lib/classNames/classNames';

import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import ViewsIcon from 'shared/assets/icons/views.svg';

import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    article: Article,
    view: ArticleView,
    className?: string,
}

export const ArticleListItem = ({ className, article, view }: ArticleListItemProps) => {
    const { t } = useTranslation('articles');
    const navigate = useNavigate();
    const onOpenArticle = useCallback(() => {
        navigate(routePath.article_details + article.id);
    }, [navigate, article.id]);

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <div className={cls.viewWrapper}>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={ViewsIcon} />
        </div>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div className={classNames(cls.articleListItem, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle}>{t('Читать далее...')}</Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleListItem, [className, cls[view]])}>
            <Card onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} className={cls.img} alt={article.title} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text title={article.title} className={cls.title} />
            </Card>
        </div>
    );
};
