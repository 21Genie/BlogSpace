import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById';

const data = {
    id: 1,
    title: 'test',
    subtitle: 'test',
};

describe('articleDetailsSlice', () => {
    test('service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: undefined,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.pending,
            ),
        ).toEqual({ isLoading: true, error: undefined });
    });

    test('service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                // @ts-ignore
                fetchArticleById.fulfilled(data, '', ''),
            ),
        ).toEqual({ isLoading: false, data });
    });
});
