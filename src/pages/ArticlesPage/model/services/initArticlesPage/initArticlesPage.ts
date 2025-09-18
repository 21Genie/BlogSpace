import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (searchParams, { getState, dispatch }) => {
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const searchFromUrl = searchParams.get('search');
            const TypeFromUrl = searchParams.get('type') as ArticleType;

            if (orderFromUrl) dispatch(articlesPageActions.setOrder(orderFromUrl));
            if (sortFromUrl) dispatch(articlesPageActions.setSort(sortFromUrl));
            if (searchFromUrl) dispatch(articlesPageActions.setSearch(searchFromUrl));
            if (TypeFromUrl) dispatch(articlesPageActions.setType(TypeFromUrl));

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
