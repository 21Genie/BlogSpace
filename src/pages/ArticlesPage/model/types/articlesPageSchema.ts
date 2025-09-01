import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean,
    error?: string,

    // pagination
    page: number,
    hasMore: boolean,
    limit: number,

    // filters
    view: ArticleView,
    sort: ArticleSortField,
    order: SortOrder,
    search: string,
    type: ArticleType,

    _inited: boolean
}
